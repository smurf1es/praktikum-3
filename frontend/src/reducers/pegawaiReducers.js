import {
  PEGAWAI_TAMBAH_REQUEST,
  PEGAWAI_TAMBAH_SUCCESS,
  PEGAWAI_TAMBAH_FAIL,
  PEGAWAI_LIST_REQUEST,
  PEGAWAI_LIST_SUCCESS,
  PEGAWAI_LIST_FAIL,
  PEGAWAI_UPDATE_REQUEST,
  PEGAWAI_UPDATE_SUCCESS,
  PEGAWAI_UPDATE_FAIL,
  PEGAWAI_DELETE_REQUEST,
  PEGAWAI_DELETE_SUCCESS,
  PEGAWAI_DELETE_FAIL,
  PEGAWAI_UPDATE_RESET,
  PEGAWAI_TAMBAH_RESET,
} from '../constants/pegawaiConstants';

export const pegawaiListReducer = (state = { pegawai: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case PEGAWAI_LIST_REQUEST:
      return {
        loading: true,
        pegawai: [],
      };
    case PEGAWAI_LIST_SUCCESS:
      return {
        loading: false,
        pegawai: payload,
      };
    case PEGAWAI_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const pegawaiTambahReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PEGAWAI_TAMBAH_REQUEST:
      return {
        loading: true,
      };
    case PEGAWAI_TAMBAH_SUCCESS:
      return {
        loading: false,
        pegawai: payload,
      };
    case PEGAWAI_TAMBAH_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PEGAWAI_TAMBAH_RESET:
      return {};
    default:
      return state;
  }
};

export const pegawaiUpdateReducer = (state = { pegawai: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case PEGAWAI_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case PEGAWAI_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        pegawai: payload,
      };
    case PEGAWAI_UPDATE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case PEGAWAI_UPDATE_RESET:
      return { pegawai: {} };
    default:
      return state;
  }
};

export const pegawaiDeleteReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case PEGAWAI_DELETE_REQUEST:
      return {
        loading: true,
      };
    case PEGAWAI_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PEGAWAI_DELETE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
