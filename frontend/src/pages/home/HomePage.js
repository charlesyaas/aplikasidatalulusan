import { useState } from 'react';
import { Chart } from 'primereact/chart';
import { DataSource } from 'components/DataSource';

export default function HomePage() {
	
	const [pageReady, setPageReady] = useState(true);
	return (
		<main id="HomePage" className="main-page">
<section className="page-section q-pa-md" >
    <div className="container-fluid">
        <div className="grid ">
            <div className="col comp-grid" >
            </div>
        </div>
    </div>
</section>
<section className="page-section mb-3" >
    <div className="container-fluid">
        <div className="grid ">
            <div className="col-12 md:col-3 comp-grid" >
                <div className="card ">
                    <div className="card  s">
                        <div className="q-pa-md">
                            <div className="font-bold text-lg">Jenjang SD</div>
                            <div className="text-500"></div>
                            <hr />
                            <div className="row q-col-gutter-sm">
                                <div className="col">
                                    <DataSource   apiPath="components_data/barchart_jenjangsd"  >
                                        {
                                        ({ response }) => 
                                        <>
                                        <Chart data={response} type="bar" options={{
                                        scales: {
                                        y: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        },
                                        x: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        }
                                        }
                                        }
                                        }  />
                                        </>
                                        }
                                    </DataSource>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-3 comp-grid" >
                <div className="card ">
                    <div className="card  s">
                        <div className="q-pa-md">
                            <div className="font-bold text-lg">Jenjang SMP</div>
                            <div className="text-500"></div>
                            <hr />
                            <div className="row q-col-gutter-sm">
                                <div className="col">
                                    <DataSource   apiPath="components_data/barchart_jenjangsmp"  >
                                        {
                                        ({ response }) => 
                                        <>
                                        <Chart data={response} type="bar" options={{
                                        scales: {
                                        y: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        },
                                        x: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        }
                                        }
                                        }
                                        }  />
                                        </>
                                        }
                                    </DataSource>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-3 comp-grid" >
                <div className="card ">
                    <div className="card  s">
                        <div className="q-pa-md">
                            <div className="font-bold text-lg">Jenjang SMA</div>
                            <div className="text-500"></div>
                            <hr />
                            <div className="row q-col-gutter-sm">
                                <div className="col">
                                    <DataSource   apiPath="components_data/barchart_jenjangsma"  >
                                        {
                                        ({ response }) => 
                                        <>
                                        <Chart data={response} type="bar" options={{
                                        scales: {
                                        y: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        },
                                        x: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        }
                                        }
                                        }
                                        }  />
                                        </>
                                        }
                                    </DataSource>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-3 comp-grid" >
                <div className="card ">
                    <div className="card  s">
                        <div className="q-pa-md">
                            <div className="font-bold text-lg">Jenjang SMK</div>
                            <div className="text-500"></div>
                            <hr />
                            <div className="row q-col-gutter-sm">
                                <div className="col">
                                    <DataSource   apiPath="components_data/barchart_jenjangsmk"  >
                                        {
                                        ({ response }) => 
                                        <>
                                        <Chart data={response} type="bar" options={{
                                        scales: {
                                        y: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        },
                                        x: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        }
                                        }
                                        }
                                        }  />
                                        </>
                                        }
                                    </DataSource>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-3 comp-grid" >
                <div className="card ">
                    <div className="card  s">
                        <div className="q-pa-md">
                            <div className="font-bold text-lg">Jenjang PAKET-A</div>
                            <div className="text-500"></div>
                            <hr />
                            <div className="row q-col-gutter-sm">
                                <div className="col">
                                    <DataSource   apiPath="components_data/barchart_jenjangpaketa"  >
                                        {
                                        ({ response }) => 
                                        <>
                                        <Chart data={response} type="bar" options={{
                                        scales: {
                                        y: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        },
                                        x: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        }
                                        }
                                        }
                                        }  />
                                        </>
                                        }
                                    </DataSource>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-3 comp-grid" >
                <div className="card ">
                    <div className="card  s">
                        <div className="q-pa-md">
                            <div className="font-bold text-lg">Jenjang PAKET-B</div>
                            <div className="text-500"></div>
                            <hr />
                            <div className="row q-col-gutter-sm">
                                <div className="col">
                                    <DataSource   apiPath="components_data/barchart_jenjangpaketb"  >
                                        {
                                        ({ response }) => 
                                        <>
                                        <Chart data={response} type="bar" options={{
                                        scales: {
                                        y: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        },
                                        x: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        }
                                        }
                                        }
                                        }  />
                                        </>
                                        }
                                    </DataSource>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 md:col-3 comp-grid" >
                <div className="card ">
                    <div className="card  s">
                        <div className="q-pa-md">
                            <div className="font-bold text-lg">Jenjang PAKET-C</div>
                            <div className="text-500"></div>
                            <hr />
                            <div className="row q-col-gutter-sm">
                                <div className="col">
                                    <DataSource   apiPath="components_data/barchart_jenjangpaketc"  >
                                        {
                                        ({ response }) => 
                                        <>
                                        <Chart data={response} type="bar" options={{
                                        scales: {
                                        y: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        },
                                        x: {
                                        title: {
                                        display: true,
                                        text: ""
                                        }
                                        }
                                        }
                                        }
                                        }  />
                                        </>
                                        }
                                    </DataSource>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
		</main>
	);
}
