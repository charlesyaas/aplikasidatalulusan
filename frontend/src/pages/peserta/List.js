import { BreadCrumb } from 'primereact/breadcrumb';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataSource } from 'components/DataSource';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { ExportPageData } from 'components/ExportPageData';
import { FilterTags } from 'components/FilterTags';
import { ImportPageData } from 'components/ImportPageData';
import { InputText } from 'primereact/inputtext';
import { PageRequestError } from 'components/PageRequestError';
import { Paginator } from 'primereact/paginator';
import { ProgressSpinner } from 'primereact/progressspinner';
import { SplitButton } from 'primereact/splitbutton';
import { Title } from 'components/Title';
import PesertaAddPage from 'pages/peserta/Add';
import useApp from 'hooks/useApp';
import useUtils from 'hooks/useUtils';

import useListPage from 'hooks/useListPage';
const PesertaListPage = (props) => {
		const app = useApp();
	const utils = useUtils();
	const filterSchema = {
		search: {
			tagTitle: "Search",
			value: '',
			valueType: 'single',
			options: [],
		},
		tahun_lulus: {
			tagTitle: "Tahun Lulus",
			value: '',
			valueType: 'single',
			options: [],
		},
		jenjang: {
			tagTitle: "Jenjang",
			value: '',
			valueType: 'single',
			options: [],
		}
	}
	const pageController = useListPage(props, filterSchema);
	const filterController = pageController.filterController;
	const { records, pageReady, loading, selectedItems, apiUrl, sortBy, sortOrder, apiRequestError, setSelectedItems, getPageBreadCrumbs, onSort, deleteItem, pagination } = pageController;
	const { filters, setFilterValue, setFilterOptions } = filterController;
	const { totalRecords, totalPages, recordsPosition, firstRow, currentPage, limit, onPageChange } =  pagination;
	function ActionButton(data){
		const items = [
		{
			label: "View",
			command: (event) => { app.navigate(`/peserta/view/${data.id}`) },
			icon: "pi pi-eye"
		},
		{
			label: "Edit",
			command: (event) => { app.navigate(`/peserta/edit/${data.id}`) },
			icon: "pi pi-pencil"
		},
		{
			label: "Delete",
			command: (event) => { deleteItem(data.id) },
			icon: "pi pi-trash"
		}
	]
		return (<SplitButton dropdownIcon="pi pi-bars" className="dropdown-only p-button-text p-button-plain" model={items} />);
	}
	function PageLoading(){
		if(loading){
			return (
				<>
					<div className="flex align-items-center justify-content-center text-gray-500 p-3">
						<div><ProgressSpinner style={{width:'30px', height:'30px'}} /> </div>
						<div  className="font-bold text-lg">Loading...</div>
					</div>
				</>
			);
		}
	}
	function EmptyRecordMessage(){
		if(pageReady && !records.length){
			return (
				<div className="text-lg mt-3 p-3 text-center text-400 font-bold">
					No record found
				</div>
			);
		}
	}
	function MultiDelete() {
		if (selectedItems.length) {
			return (
				<div className="m-2 flex-grow-0">
					<Button onClick={() => deleteItem(selectedItems)} icon="pi pi-trash" className="p-button-danger" title="Delete Selected"/>
				</div>
			)
		}
	}
	function ExportData() {
		if (props.exportData && records.length) {
			const downloadFileName = `${utils.dateNow()}-peserta`;
			return (
				<div className="m-2">
					<ExportPageData  pageUrl={apiUrl} downloadFileName={downloadFileName} butonLabel="" tooltip="Export" buttonIcon="pi pi-print" />
				</div>
			);
		}
	}
	function ImportData() {
		if (props.importData) {
			return (
				<div className="m-2">
					<ImportPageData label="Select a file to import" uploadPath="peserta/importdata" buttonIcon="pi pi-folder" buttonLabel="Import Data" onImportCompleted={(response) => {app.flashMsg('Import Data', response, 'success')}} />
				</div>
			);
		}
	}
	function PagerControl() {
		if (props.paginate && totalPages > 1) {
		const pagerReportTemplate = {
			layout: pagination.layout,
			CurrentPageReport: (options) => {
				return (
					<>
						<span className="text-sm text-gray-500 px-2">Page <b>{ options.currentPage } of { options.totalPages }</b></span>
						<span className="text-sm text-gray-500 px-2">Records <b>{ recordsPosition } of { options.totalRecords }</b></span>
					</>
				);
			}
		}
		return (
			<div className="flex-grow-1">
				<Paginator first={firstRow} rows={limit} totalRecords={totalRecords}  rowsPerPageOptions={[5, 10, 20, 30, 50, 100, 200, 500, 1000]}  onPageChange={onPageChange} template={pagerReportTemplate} />
			</div>
		)
		}
	}
	function PageActionButtons() {
		return (
			<div className="flex flex-wrap">
				<MultiDelete />
				<ExportData />
				<ImportData />
			</div>
		);
	}
	function PageFooter() {
		if (pageReady && props.showFooter) {
			return (
				<div className="flex flex-wrap">
					<PageActionButtons />
					<PagerControl />
				</div>
			);
		}
	}
	function PageBreadcrumbs(){
		if(props.showBreadcrumbs) {
			const items = getPageBreadCrumbs();
			return (items.length > 0 && <BreadCrumb className="mb-3" model={items} />);
		}
	}
	if(apiRequestError){
		return (
			<PageRequestError error={apiRequestError} />
		);
	}
	return (
<main id="PesertaListPage" className="main-page">
    { (props.showHeader) && 
    <section className="page-section mb-3" >
        <div className="container-fluid">
            <div className="grid ">
                <div className="col " >
                    <Title title="Peserta"   titleClass="text-2xl text-primary font-bold" subTitleClass="text-500"      separator={false} />
                </div>
                <div className="col-sm-2 " >
                    <div className="card mr-2">
                        <Button label="Add New Peserta" icon="pi pi-plus"  onClick={()=>app.openPageDialog(<PesertaAddPage isSubPage apiPath={`/peserta/add`} />, { closeBtn: true  })}  className="p-button w-full bg-primary "  />
                    </div>
                </div>
                <div className="col-sm10 comp-grid" >
                    <div className="card ">
                        <span className="p-input-icon-left w-full">
                        <i className="pi pi-search" />
                        <InputText placeholder="" className="w-full" value={filters.search.value}  onChange={(e) => setFilterValue('search', e.target.value)} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    }
    <section className="page-section " >
        <div className="container-fluid">
            <div className="grid ">
                <div className="col-sm-2 col-md-2 col-2 comp-grid" >
                    <div className="card ">
                        <div className="p-3 mb-3">
                            <DataSource onLoad={(options) => setFilterOptions('tahun_lulus', options)}  apiPath="components_data/tahun_lulus_option_list"  >
                                {
                                ({ response }) => 
                                <>
                                <div className="">
                                    <Dropdown filter={true} className="w-full" onChange={(e) => setFilterValue( 'tahun_lulus', e.value)} value={filters.tahun_lulus.value} optionLabel="label" optionValue="value" options={filters.tahun_lulus.options} placeholder="Pilih Tahun" >
                                    </Dropdown>
                                </div>
                                </>
                                }
                            </DataSource>
                        </div>
                        <div className="p-3 mb-3">
                            <DataSource onLoad={(options) => setFilterOptions('jenjang', options)}  apiPath="components_data/jenjang_option_list"  >
                                {
                                ({ response }) => 
                                <>
                                <div className="">
                                    <Dropdown filter={true} className="w-full" onChange={(e) => setFilterValue( 'jenjang', e.value)} value={filters.jenjang.value} optionLabel="label" optionValue="value" options={filters.jenjang.options} placeholder="Pilih Jenjang" >
                                    </Dropdown>
                                </div>
                                </>
                                }
                            </DataSource>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-md-10 col-10 comp-grid" >
                    <div className="card ">
                        <FilterTags filterController={filterController} />
                        <div >
                            <PageBreadcrumbs />
                            <div className="page-records">
                                <DataTable 
                                    lazy={true} 
                                    loading={loading} 
                                    selectionMode="checkbox" selection={selectedItems} onSelectionChange={e => setSelectedItems(e.value)}
                                    value={records} 
                                    dataKey="id" 
                                    sortField={sortBy} 
                                    sortOrder={sortOrder} 
                                    onSort={onSort}
                                    className=" p-datatable-sm" 
                                    stripedRows={true}
                                    showGridlines={false} 
                                    rowHover={true} 
                                    responsiveLayout="stack" 
                                    emptyMessage={<EmptyRecordMessage />} 
                                    >
                                    {/*PageComponentStart*/}
                                    <Column selectionMode="multiple" headerStyle={{width: '2rem'}}></Column>
                                    <Column  field="jenjang" header="Jenjang"   ></Column>
                                    <Column  field="tahun_lulus" header="Tahun Lulus"   ></Column>
                                    <Column  field="nama_peserta" header="Nama Peserta"   ></Column>
                                    <Column  field="tempat_lahir" header="Tempat Lahir"   ></Column>
                                    <Column  field="tanggal_lahir" header="Tanggal Lahir"   ></Column>
                                    <Column  field="orangtua" header="Orangtua"   ></Column>
                                    <Column  field="nopes_un" header="Nopes Un"   ></Column>
                                    <Column  field="no_ijazah" header="No Ijazah"   ></Column>
                                    <Column  field="npsn" header="Npsn"   ></Column>
                                    <Column  field="asal_sekolah" header="Asal Sekolah"   ></Column>
                                    <Column headerStyle={{width: '2rem'}} headerClass="text-center" body={ActionButton}></Column>
                                    {/*PageComponentEnd*/}
                                </DataTable>
                            </div>
                            <PageFooter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
	);
}
PesertaListPage.defaultProps = {
	primaryKey: 'id',
	pageName: 'peserta',
	apiPath: 'peserta/index',
	routeName: 'pesertalist',
	msgBeforeDelete: "Are you sure you want to delete this record?",
	msgTitle: "Delete record",
	msgAfterDelete: "Record deleted successfully",
	showHeader: true,
	showFooter: true,
	paginate: true,
	isSubPage: false,
	showBreadcrumbs: true,
	exportData: true,
	importData: true,
	keepRecords: false,
	multiCheckbox: true,
	search: '',
	fieldName: null,
	fieldValue: null,
	sortField: '',
	sortDir: '',
	pageNo: 1,
	limit: 10,
}
export default PesertaListPage;
