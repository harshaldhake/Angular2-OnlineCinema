export class User {

  constructor(public uid: string,
              public displayName: string,
              public email: string,
              public photoURL: string,
              public refreshToken: string) {
  }
}
