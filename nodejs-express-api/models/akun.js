
import { BaseModel, sequelize, Sequelize } from "./basemodel.js";

class Akun extends BaseModel {
	static init() {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
				nama_lengkap: { type:Sequelize.STRING   },
				username: { type:Sequelize.STRING   },
				password: { type:Sequelize.STRING   },
				email: { type:Sequelize.STRING   },
				photo: { type:Sequelize.STRING   },
				level: { type:Sequelize.STRING   }
			}, 
			{ 
				sequelize,
				
				tableName: "akun",
				modelName: "akun",
			}
		);
	}
	
	static listFields() {
		return [
			'nama_lengkap', 
			'username', 
			'email', 
			'photo', 
			'level', 
			'id'
		];
	}

	static exportListFields() {
		return [
			'nama_lengkap', 
			'username', 
			'email', 
			'photo', 
			'level', 
			'id'
		];
	}

	static viewFields() {
		return [
			'nama_lengkap', 
			'username', 
			'email', 
			'level', 
			'id'
		];
	}

	static accounteditFields() {
		return [
			'id', 
			'nama_lengkap', 
			'username', 
			'photo', 
			'level'
		];
	}

	static accountviewFields() {
		return [
			'id', 
			'nama_lengkap', 
			'username', 
			'email', 
			'level'
		];
	}

	static editFields() {
		return [
			'id', 
			'nama_lengkap', 
			'username', 
			'photo', 
			'level'
		];
	}

	
	static searchFields(){
		return [
			Sequelize.literal("nama_lengkap LIKE :search"), 
			Sequelize.literal("username LIKE :search"), 
			Sequelize.literal("email LIKE :search"), 
			Sequelize.literal("level LIKE :search"), 
			Sequelize.literal("id LIKE :search"),
		];
	}

	
	
}
Akun.init();
export default Akun;
