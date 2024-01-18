export default {
	app: {
		name: "APLIKASI DATA LULUSAN PAPUA",
		url: "http://localhost:8060",
		frontendUrl: "http://localhost:8050",
		secret: "9f35e1f5727bbaa629ba169e59e07847",
		language: "english",
		publicDir: "assets",
	},
	auth: {
		userTokenSecret: "68af9e4A-1ax%W@4df22YY6Q!!0-6b87ce0ff6794d990c0f",
		apiTokenSecret: "125c3508$Xax%W!199759B#Q-!07a555d19e0d4b32b87506",
		jwtDuration: 30, //in minutes
		otpDuration: 5, //in minutes
	},
	database: {
		name:"aplikasidatalulusan",
		type: "mysql",
		host: "localhost",
		username: "root",
		password: "",
		port: "3306",
		charset: "utf8",
		recordlimit: 10,
		ordertype: "DESC"
	},
	mail: {
		username:"",
		password: "",
		senderemail:"",
		sendername:"",
		host: "",
		secure: true,
		port: ""
	},
	upload: {
		tempDir: "uploads/temp/",
		import_data: {
			filenameType: "timestamp",
			extensions: "json,csv",
			limit: "10",
			maxFileSize: "3",
			returnFullpath: "false",
			filenamePrefix: "",
			uploadDir: "uploads/files/"
		},
		
		photo: {
			filenameType: "random",
			extensions: "jpg,png,gif,jpeg",
			limit: "1",
			maxFileSize: "3",
			returnFullpath: false,
			filenamePrefix: "",
			uploadDir: "uploads/files",
			imageResize:  [ 
				{name: "small", width: 100, height: 100, mode: "cover"}, 
				{name: "medium", width: 480, height: 480, mode: "inside"}, 
				{name: "large", width: 1024, height: 760, mode: "inside"}
			],

		},

	},
	s3: {
		secretAccessKey: "",
		accessKeyId: "",
		region: "us-west-2",
		bucket: "",
	},
	
}