// Маршруты в приложении
export enum AppRoute {
    Main = '/',
    Login = 'login',
    Сonstructor = 'survey-constructor',
    Surveys = 'surveys',
    MyList = 'my-list',
    Profile = 'profile',
    NotFound = '*',
  }
  
  // Статусы авторизации
  export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN',
  }
  