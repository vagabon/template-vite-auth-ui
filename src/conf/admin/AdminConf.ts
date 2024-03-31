import { IAdminTabConfDto } from '@vagabond-inc/react-boilerplate-app';

const COMMON_COL = [
  { label: 'AUTH:FIELDS.CREATE_DATE', name: 'creationDate', date: true, order: true },
  { label: 'AUTH:FIELDS.ACTIVE', name: 'active', order: true },
];

const COMMON_INPUT = {
  creationDate: { label: 'AUTH:FIELDS.CREATE_DATE', type: 'datetime', required: false, className: 'width50' },
  updatedDate: { label: 'AUTH:FIELDS.UPDATE_DATE', type: 'datetime', required: false, className: 'width50' },
  deletedDate: { label: 'AUTH:FIELDS.DELETE_DATE', type: 'datetime', required: false, className: 'width50', disabled: true },
  active: { label: 'AUTH:FIELDS.ACTIVE', type: 'switch', required: false, className: 'width50' },
};

const PROFILE_M2M = {
  name: 'name',
  endPoint: 'profile',
  fields: 'name%',
  order: 'name',
  orderBy: 'asc',
};

export const AdminConf: IAdminTabConfDto = {
  max: 10,
  tabs: [
    {
      name: 'user',
      label: 'AUTH:USER:TITLE',
      findByChamps: 'username%And|Email%',
      sortBy: 'creationDate',
      sortByAsc: 'desc',
      cells: [
        { label: 'AUTH:FIELDS.LOGIN', name: 'username', order: true },
        { label: 'AUTH:FIELDS.EMAIL', name: 'email', order: true },
        { label: 'AUTH:FIELDS.PROFILES', name: 'profiles.name' },
        { label: 'AUTH:FIELDS.LAST_CONNEXION_DATE', name: 'lastConnexionDate', date: true, order: true },
        ...COMMON_COL,
      ],
      form: {
        username: { label: 'AUTH:FIELDS.LOGIN', type: 'text', required: true },
        password: { label: 'AUTH:FIELDS.PASSWORD', type: 'password', required: false },
        email: { label: 'AUTH:FIELDS.EMAIL', type: 'text', email: true, required: true },
        profiles: {
          label: 'AUTH:FIELDS.PFOFILES',
          type: 'm2m',
          required: true,
          m2m: PROFILE_M2M,
          array: true,
        },
        lastConnexionDate: { label: 'AUTH:FIELDS.LAST_CONNEXION_DATE', type: 'lastConnexionDate', required: false },
        activationToken: { label: 'AUTH:FIELDS.ACTIVATION_TOKEN', type: 'text', className: 'width50' },
        emailActivation: { label: 'AUTH:FIELDS.EMAIL_ACTIVIATION', type: 'switch', className: 'width50' },
        identityToken: { label: 'AUTH:FIELDS.IDENTITY_TOKEN', type: 'text', className: 'width50' },
        identityTokenDateEnd: { label: 'AUTH:FIELDS.IDENTITY_TOKEN_DATE', type: 'datetime', className: 'width50' },
        googleId: { label: 'AUTH:FIELDS.GOOGLE_ID', type: 'text', className: 'width50' },
        facebookId: { label: 'AUTH:FIELDS.FACEBOOK_ID', type: 'text', className: 'width50' },
        ...COMMON_INPUT,
      },
    },
    {
      name: 'profile',
      label: 'AUTH:PROFILE:TITLE',
      findByChamps: 'name%',
      sortBy: 'name',
      cells: [
        { label: 'AUTH:FIELDS.NAME', name: 'name', order: true },
        { label: 'AUTH:FIELDS.ROLES', name: 'roles', order: true },
        ...COMMON_COL,
      ],
      form: {
        name: { label: 'AUTH:FIELDS.NAME', type: 'text', required: true },
        roles: { label: 'AUTH:FIELDS.ROLES', type: 'text', required: true },
        ...COMMON_INPUT,
      },
    },
    {
      name: 'news',
      label: 'NEWS:TITLE',
      findByChamps: 'title%And|description%',
      sortBy: 'creationDate',
      sortByAsc: 'desc',
      cells: [
        { label: 'FIELDS.ID', name: 'id', order: true },
        { label: 'NEWS:FIELDS.TITLE', name: 'title', order: true },
        { label: 'NEWS:FIELDS.USER', name: 'user.username', order: false },
        ...COMMON_COL,
      ],
      form: {
        title: { label: 'NEWS:FIELDS.TITLE', type: 'text', required: true },
        avatar: { label: 'NEWS:FIELDS.AVATAR', type: 'upload', required: false },
        image: { label: 'NEWS:FIELDS.IMAGE', type: 'upload', required: false },
        resume: { label: 'NEWS:FIELDS.RESUME', type: 'textarea', required: true },
        description: { label: 'NEWS:FIELDS.DESCRIPTION', type: 'textarea', required: true },
        tags: { label: 'NEWS:FIELDS.TAGS', type: 'text', required: true },
        user: { label: 'NEWS:FIELDS.USER', type: 'select', listId: true, required: true, listEndPoint: '/user/', listName: 'username' },
        ...COMMON_INPUT,
      },
    },
  ],
};
