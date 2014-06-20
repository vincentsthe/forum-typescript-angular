/// <reference path="../_all.ts" />

module forum {
	export class User {
		public username;

		constructor(username) {
			this.username = username;
		}

		static exist(name: string) {
			var listUser : User[] = Storage.getUser();

			var ada: boolean = false;

			for(var i=0 ; i<listUser.length ; i++) {
				if(listUser[i].username == name) {
					ada = true;
				}
			}

			return ada;
		}

		static add(name: string) {
			var listUser : User[] = Storage.getUser();

			var newUser: User = new User(name);
			listUser.push(newUser);

			Storage.putUser(listUser);
		}
	}
}