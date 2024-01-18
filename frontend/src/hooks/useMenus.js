/**
 * @Category React Hook function
 * Provide single source to manage application static menus items
 * 
**/


export default function useMenus() {
    
    
    return {
	navbarTopRight: [],
	navbarTopLeft: [],
	navbarSideLeft: [
  {
    "to": "/home",
    "label": "Home",
    "icon": "pi pi-home",
    "iconcolor": "",
    "target": "",
  },
  {
    "to": "/akun",
    "label": "Akun",
    "icon": "pi pi-user",
    "iconcolor": "",
    "target": "",
  },
  {
    "to": "/peserta",
    "label": "Peserta",
    "icon": "pi pi-users",
    "iconcolor": "",
    "target": "",
  }
],
	jenjang: [    
{value: "SD", label: "SD"},
	{value: "SMP", label: "SMP"},
	{value: "SMA", label: "SMA"},
	{value: "SMK", label: "SMK"},
	{value: "PAKETA", label: "PAKET-A"},
	{value: "PAKETB", label: "PAKET-B"},
	{value: "PAKETC", label: "PAKET-C"}
    ],
        exportFormats: {
            print: {
                label: 'Print',
                icon: 'pi pi-print',
                type: 'print',
                ext: '',
            },
            pdf: {
                label: 'Pdf',
                icon: 'pi pi-file-pdf',
                type: 'pdf',
                ext: 'pdf',
            },
            excel: {
                label: 'Excel',
                icon: 'pi pi-file-excel',
                type: 'excel',
                ext: 'xlsx',
            },
            csv: {
                label: 'Csv',
                icon: 'pi pi-table',
                type: 'csv',
                ext: 'csv',
            },
        },
    }
}