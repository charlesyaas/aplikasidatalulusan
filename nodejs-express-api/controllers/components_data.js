import { Router } from 'express';
import utils from '../helpers/utils.js';
import DB from '../models/db.js';


const router = Router();


 /**
 * Route to check if field value already exist in a Akun table
 * @GET /components_data/akun_username_exist/{fieldvalue}
 */
router.get('/akun_username_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Akun.count({ where:{ 'username': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Akun table
 * @GET /components_data/akun_email_exist/{fieldvalue}
 */
router.get('/akun_email_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Akun.count({ where:{ 'email': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get tahun_lulus_option_list records
 * @GET /components_data/tahun_lulus_option_list
 */
router.get('/tahun_lulus_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT  DISTINCT tahun_lulus AS value,tahun_lulus AS label FROM peserta ORDER BY tahun_lulus DESC` ;
		
		let records = await DB.rawQueryList(sqltext);
		return res.ok(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get jenjang_option_list records
 * @GET /components_data/jenjang_option_list
 */
router.get('/jenjang_option_list', async (req, res) => {
	try{
		let sqltext = `SELECT  DISTINCT jenjang AS value,jenjang AS label FROM peserta ORDER BY jenjang DESC` ;
		
		let records = await DB.rawQueryList(sqltext);
		return res.ok(records);
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_jenjangsd records
 * @GET /components_data/barchart_jenjangsd
 */
router.get('/barchart_jenjangsd',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SD%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Lulusan SD",
			backgroundColor: utils.randomColor(), 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "2",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_jenjangsmp records
 * @GET /components_data/barchart_jenjangsmp
 */
router.get('/barchart_jenjangsmp',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SMP%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Lulusan SMP",
			backgroundColor: utils.randomColor(), 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "2",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_jenjangsma records
 * @GET /components_data/barchart_jenjangsma
 */
router.get('/barchart_jenjangsma',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SMA%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Lulusan SMA",
			backgroundColor: utils.randomColor(), 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "2",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_jenjangsmk records
 * @GET /components_data/barchart_jenjangsmk
 */
router.get('/barchart_jenjangsmk',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%SMK%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Lulusan SMK",
			backgroundColor: utils.randomColor(), 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "2",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_jenjangpaketa records
 * @GET /components_data/barchart_jenjangpaketa
 */
router.get('/barchart_jenjangpaketa',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%PAKETA%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Lulusan PAKET-A",
			backgroundColor: utils.randomColor(), 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "2",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_jenjangpaketb records
 * @GET /components_data/barchart_jenjangpaketb
 */
router.get('/barchart_jenjangpaketb',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%PAKETB%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Lulusan PAKET-B",
			backgroundColor: utils.randomColor(), 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "2",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});


 /**
 * Route to get barchart_jenjangpaketc records
 * @GET /components_data/barchart_jenjangpaketc
 */
router.get('/barchart_jenjangpaketc',  async (req, res) => {
	let chartData = { labels:[], datasets:[] };
	try{
		let sqltext = `SELECT  COUNT(peserta.id) AS count_of_id, peserta.tahun_lulus FROM peserta WHERE  (peserta.jenjang  LIKE '%PAKETC%' ) AND (peserta.tahun_lulus  >=YEAR(NOW()) - 5 ) GROUP BY peserta.tahun_lulus` ;
		
		let records = await DB.rawQueryList(sqltext);
		chartData['labels'] = records.map(function(v){ return v.tahun_lulus });
		let dataset1 = {
			data: records.map(function(v){ return parseFloat(v.count_of_id) }),
			label: "Lulusan PAKETC",
			backgroundColor: utils.randomColor(), 
			borderColor: "rgba(0 , 0 , 0, 0.5)", 
			borderWidth: "2",
		};
		chartData.datasets.push(dataset1);
		return res.ok(chartData) ;
	}
	catch(err) {
		return res.serverError(err);
	}
});
export default router;
