import { Formik, Form, ErrorMessage } from 'formik';
import { useLocation } from 'react-router-dom';
import * as yup from 'yup';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { PageRequestError } from 'components/PageRequestError';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Uploader } from 'components/Uploader';
import useApp from 'hooks/useApp';

import useEditPage from 'hooks/useEditPage';
const AkunAccounteditPage = (props) => {
		const app = useApp();
	const location = useLocation();
	// form validation schema
	const validationSchema = yup.object().shape({
		nama_lengkap: yup.string().nullable().label("Nama Lengkap"),
		username: yup.string().nullable().label("Username"),
		photo: yup.string().nullable().label("Photo"),
		level: yup.string().nullable().label("Level")
	});
	// form default values
	const formDefaultValues = {
		nama_lengkap: "NULL", 
		username: "NULL", 
		photo: '', 
		level: "NULL", 
	}
	//where page logics resides
	const pageController = useEditPage({ props, formDefaultValues, afterSubmit });
	//destructure and grab what we need
	const { formData, handleSubmit, submitForm, pageReady, loading, saving, apiRequestError, inputClassName } = pageController
	//Event raised on form submit success
	function afterSubmit(response){
		app.flashMsg(props.msgTitle, props.msgAfterSave);
		window.location.reload();
	}
	// loading form data from api
	if(loading){
		return (
			<div className="p-3 text-center">
				<ProgressSpinner style={{width:'50px', height:'50px'}} />
			</div>
		);
	}
	//display error page 
	if(apiRequestError){
		return (
			<PageRequestError error={apiRequestError} />
		);
	}
	//page is ready when formdata loaded successfully
	if(pageReady){
		return (
<main id="AkunAccounteditPage" className="main-page">
    <section className="page-section " >
        <div className="container">
            <div className="grid ">
                <div className="md:col-9 sm:col-12 comp-grid" >
                    <div >
                        <Formik
                            initialValues={formData}
                            validationSchema={validationSchema} 
                            onSubmit={(values, actions) => {
                            submitForm(values);
                            }
                            }
                            >
                            { (formik) => {
                            return (
                            <Form className={`${!props.isSubPage ? 'card  ' : ''}`}>
                                <div className="grid">
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Nama Lengkap 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="nama_lengkap"  onChange={formik.handleChange}  value={formik.values.nama_lengkap}   label="Nama Lengkap" type="text" placeholder="Enter Nama Lengkap"        className={inputClassName(formik?.errors?.nama_lengkap)} />
                                                <ErrorMessage name="nama_lengkap" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Username 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="username"  onChange={formik.handleChange}  value={formik.values.username}   label="Username" type="text" placeholder="Enter Username"        className={inputClassName(formik?.errors?.username)} />
                                                <ErrorMessage name="username" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Photo 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <div className={inputClassName(formik?.errors?.photo)}>
                                                    <Uploader name="photo" showUploadedFiles value={formik.values.photo} uploadPath="fileuploader/upload/photo" onChange={(paths) => formik.setFieldValue('photo', paths)} fileLimit={1} maxFileSize={3} accept=".jpg,.png,.gif,.jpeg" multiple={false} label="Choose files or drop files here" onUploadError={(errMsg) => app.flashMsg('Upload error', errMsg, 'error')} />
                                                </div>
                                                <ErrorMessage name="photo" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="formgrid grid">
                                            <div className="col-12 md:col-3">
                                                Level 
                                            </div>
                                            <div className="col-12 md:col-9">
                                                <InputText name="level"  onChange={formik.handleChange}  value={formik.values.level}   label="Level" type="text" placeholder="Enter Level"        className={inputClassName(formik?.errors?.level)} />
                                                <ErrorMessage name="level" component="span" className="p-error" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                { props.showFooter && 
                                <div className="text-center my-3">
                                    <Button onClick={(e) => handleSubmit(e, formik)}  type="submit" label="Update" icon="pi pi-send" loading={saving} />
                                </div>
                                }
                            </Form>
                            );
                            }
                            }
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
		);
	}
}
AkunAccounteditPage.defaultProps = {
	primaryKey: 'id',
	pageName: 'akun',
	apiPath: 'account/edit',
	routeName: 'akunaccountedit',
	submitButtonLabel: "Update",
	formValidationError: "Form is invalid",
	formValidationMsg: "Please complete the form",
	msgTitle: "Update Record",
	msgAfterSave: "Record updated successfully",
	msgBeforeSave: "",
	showHeader: true,
	showFooter: true,
	redirect: true,
	isSubPage: false
}
export default AkunAccounteditPage;
