/**  */
import React from 'react';

import { mockBoilerPlateMd } from '../node_modules/@vagabond-inc/react-boilerplate-app/dist/setupTests-md';

declare global {
  interface Window {
    ENV: any;
  }
  const jest: any;
  const beforeEach: any;
  const afterEach: any;
}

jest.mock('i18n/i18n', () => ({
  changeLanguage: jest.fn(),
}));

/********************************** MOCK REDUX ***********************************/

global.mockDispatch = jest.fn();

import { IApiDto } from '@vagabond-inc/react-boilerplate-md';
import store from './store/Store';

jest.mock('store/Store', () => ({
  useAppSelector: () => jest.fn(() => Promise.resolve()),
  useAppDispatch: jest.fn(() => Promise.resolve()),
}));
global.useAppSelectorSpy = jest.spyOn(store, 'useAppSelector');
global.useAppDispatchSpy = jest.spyOn(store, 'useAppDispatch');

/********************************** MOCK ROUTER **********************************/

global.mockUserConnected = { id: 1, name: 'toto' };
global.mockLocation = { pathname: '/' };
global.mockNavigate = jest.fn();

global.mockHttpGet = (url: string, callback?: (data: IApiDto) => void) => {
  callback?.({ id: 1 });
};
global.mockHttpPost = (
  url: string,
  data: IApiDto,
  callback?: (data: IApiDto) => void,
  callbackError?: ((data: any) => void) | undefined,
) => {
  callback?.({ id: 1 });
  callbackError?.({ message: 'message' });
};
global.mockHttpPut = (url: string, data: IApiDto, callback?: (data: IApiDto) => void) => {
  callback?.({ id: 1 });
};
global.mockDeleteById = (url: string, data: IApiDto, callback?: (data: IApiDto) => void) => {
  callback?.({ id: 1 });
};

/*** MUI LIB ***/
jest.mock('@vagabond-inc/react-boilerplate-md', () => ({
  ...mockBoilerPlateMd,
}));

global.firstRender = false;

/*** MUI LIB ***/
jest.mock('@vagabond-inc/react-boilerplate-app', () => ({
  StorageUtils: {
    getCurrentUser: () => global.currentUser,
    setCurrentUser: jest.fn(),
  },
  useAppChartBar: () => ({
    getColors: jest.fn(),
  }),
  AppChartBar: ({ generateCallback }: any) => <div data-testid="AppChartBar" onClick={generateCallback}></div>,
  AppPieBar: () => <div data-testid="AppPieBar"></div>,
  AppFormik: ({ onSubmit, children }: any) => (
    <div data-testid="AppFormik" onClick={onSubmit}>
      {children({ values: [], handleSubmit: jest.fn() })}
    </div>
  ),
  AppButtonRefresh: ({ callback }: any) => <div data-testid="AppButtonRefresh" onClick={callback}></div>,
  AppButtonReport: ({ callback }: any) => <div data-testid="AppButtonReport" onClick={callback}></div>,
  AppContent: (props: any) => global.mockWithChildren('AppContent', props),
  AppFabAdd: ({ callback }: any) => <div data-testid="AppFabAdd" onClick={callback}></div>,
  AppInfiniteScrool: ({ children }: any) => <div data-testid="AppInfiniteScrool">{children}</div>,
  ShowMessage: () => global.mockWithSimple('ShowMessage'),
  NewsList: (props: any) => global.mockWithChildren('NewsList', props),

  HasRole: (props: any) => global.mockWithChildren('HasRole', props),
  AdminRouter: () => <></>,
  AuthRouter: () => <></>,
  NewsRouter: () => <></>,
  UserRouter: () => <></>,
  NotificationRouter: () => <></>,
  InfiniteScrollPage: ({ doChangePage, doSearch, children }: any) => (
    <div data-testid="InfiniteScrollPage" onClick={doChangePage}>
      <div data-testid="InfiniteScrollPageSearch" onClick={doSearch}>
        {children}
      </div>
    </div>
  ),

  CustomForm: ({ handleUpdate }: any) => <div data-testid="CustomForm" onClick={handleUpdate}></div>,
  CustomList: ({ buttonChildren, callback, callbackAvatar, callbackDelete, callbackSettings, callbackCheckbox }: any) => (
    <div data-testid="CustomList" onClick={callback}>
      <div data-testid="CustomListButton">{buttonChildren?.('1')}</div>
      <div data-testid="CustomListDelete" onClick={callbackDelete}></div>
      <div data-testid="CustomListAvatar" onClick={callbackAvatar?.({ id: 1 })}></div>
      <div data-testid="CustomListSettings" onClick={callbackSettings}></div>
      <div data-testid="CustomListCheckbox" onClick={() => callbackCheckbox(1, true)}></div>
    </div>
  ),
  CustomModale: ({ callback, children }: any) => (
    <div data-testid="CustomModale" onClick={callback}>
      {children({ closeModale: () => {} })}
    </div>
  ),
  CustomModaleCard: ({ callback, children }: any) => (
    <div data-testid="CustomModaleCard" onClick={callback}>
      {children()}
    </div>
  ),
  CustomModaleConfirm: ({ callback, children }: any) => (
    <div data-testid="CustomModaleConfirm" onClick={callback}>
      {children?.()}
    </div>
  ),
  CustomModaleForm: ({ callback, children }: any) => (
    <div data-testid="CustomModaleForm" onClick={callback}>
      {children()}
    </div>
  ),
  CustomNotification: () => <div data-testid="CustomNotification"></div>,
  CustomSeo: () => <div data-testid="CustomSeo"></div>,

  NewsCard: ({ children }: any) => <div data-testid="NewsCard">{children}</div>,
  NewsCardSmall: ({ children }: any) => <div data-testid="NewsCardSmall">{children}</div>,

  SuspenceLoader: ({ children }: any) => <div data-testid="SuspenceLoader">{children}</div>,

  ProfilePage: ({ children }: any) => <div data-testid="ProfilePage">{children}</div>,
  ProfileShow: ({ children }: any) => <div data-testid="ProfileShow">{children}</div>,
  ProfileService: {},
  UserService: {},

  AppTheme: ({ children }: any) => <div data-testid="AppTheme">{children}</div>,
  Header: ({ children }: any) => <div data-testid="Header">{children}</div>,
  Footer: ({ children }: any) => <div data-testid="Footer">{children}</div>,

  AxiosInterceptor: () => jest.fn(),
  CommonAction: {
    clearMessage: jest.fn(),
    addHistory: jest.fn(),
  },
  ApiService: {
    get: jest.fn(),
    put: jest.fn(),
    post: jest.fn(),
    patch: jest.fn(),
    delete: jest.fn(),
    returnPromise: jest.fn(),
    findById: jest.fn(),
    findBy: jest.fn(),
    countBy: jest.fn(),
  },
  ApiCrudService: {
    createOrUpdate: jest.fn(),
  },
  NewsService: {
    fetchNews: jest.fn(),
  },
  DefaultState: {},
  ReducersActions: {
    setDatas: jest.fn(),
    addDatas: jest.fn(),
    updataDatas: jest.fn(),
    setData: jest.fn(),
    setCount: jest.fn(),
    setSearch: jest.fn(),
    setPage: jest.fn(),
    setSearchAndPage: jest.fn(),
  },

  useApiService: () => ({
    httpGet: global.mockHttpGet,
    httpPost: global.mockHttpPost,
    httpPut: global.mockHttpPut,
    deleteById: global.mockDeleteById,
  }),
  useApiServiceCrud: () => ({
    createOrUpdate: (url: string, data: IApiDto, locale: string, callback?: (data: IApiDto) => void) => {
      callback?.({ id: 1 });
    },
  }),
  useApiServiceFindBy: () => ({
    fetchBy: (values: string, page: number, orderBy: string, orderByAsc: string, callback?: (data: IApiDto) => void) => {
      callback?.({ id: 1 });
    },
    resetStopLoad: jest.fn(),
  }),
  useApiServiceFetchBy: () => ({
    firstRender: global.firstRender,
    datas: mockDatas,
    search: '',
    count: 0,
    page: 0,
    doFetchByFields: jest.fn(),
    doSearch: (search, callback) => {
      callback?.();
    },
    order: { order: 'order', orderAsc: false },
    doChangePage: (page, callback) => () => {
      callback?.();
    },
    doChangeOrder: (order, callback) => {
      callback?.();
    },
  }),
  useAuth: () => ({
    user: { id: 1 },
  }),

  NotFoundPage: () => {
    <div data-testid="NotFoundPage"></div>;
  },
  useCreateNews: () => {
    return {
      news: { id: 1 },
      fetchById: jest.fn(),
    };
  },
  useModal: () => {
    return {
      open: false,
      openModal: jest.fn(),
      closeModal: jest.fn(),
    };
  },
  useMessage: () => {
    return {
      setMessage: jest.fn(),
    };
  },
  useRole: () => {
    return {
      userConnected: global.mockUserConnected,
      hasUserRole: jest.fn(),
    };
  },
  useUserAuth: () => {
    return {
      useUserAuth: jest.fn(),
    };
  },
  useAppImage: () => {
    return {
      getImage: jest.fn(),
    };
  },
  configureStore: jest.fn(),
  createSlice: ({ name, initialState, reducers }: any) => {
    return {
      name: name,
      state: initialState,
      actions: reducers,
      reducer: reducers,
    };
  },
  RoleUtils: {
    hasProfile: () => true,
  },
  Provider: jest.fn(),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
  combineReducers: jest.fn(),
  BrowserRouter: jest.fn(),
  Link: jest.fn(),
  Navigate: jest.fn(),
  Route: jest.fn(),
  Routes: jest.fn(),
}));

jest.mock('react-ga4', () => ({
  initialize: jest.fn(),
  send: jest.fn(),
}));

jest.mock('@stripe/react-stripe-js', () => ({
  PaymentElement: () => <></>,
  useElements: () => ({
    submit: () => ({
      error: undefined,
    }),
  }),
  useStripe: () => ({
    confirmPayment: () => ({
      error: 'error',
    }),
  }),
  Elements: ({ children }) => <>{children}</>,
}));

jest.mock('conf/AppConf', () => ({
  AppConf: {
    VERSION: '0.0.1',
  },
}));

/***************************** AFTER EACH RESET MOCK *****************************/

const mockDatas = [];

global.mockStore = {
  common: { modeTheme: 'light' },
  auth: { user: { id: 1 } },
  notification: { nbNotification: 0 },
};

beforeEach(() => {
  global.useAppSelectorSpy.mockImplementation((callback) => callback(global.mockStore));
  global.useAppDispatchSpy.mockReturnValue(global.mockDispatch);
});

afterEach(() => {
  jest.resetAllMocks();
});

/***************** ENV GLOBAL FOR APIS AND EXTERNAL VARIABLES ************************/

window.ENV = {
  API_URL: 'http://localhost:8090',
};

global.mockClipboard = jest.fn();

Object.assign(navigator, {
  clipboard: {
    writeText: global.mockClipboard,
  },
});
