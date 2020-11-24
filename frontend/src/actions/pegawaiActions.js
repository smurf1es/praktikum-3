import axios from 'axios';
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
} from '../constants/pegawaiConstants';

export const listPegawai = () => async (dispatch) => {
  try {
    dispatch({
      type: PEGAWAI_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/pegawai');

    dispatch({
      type: PEGAWAI_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PEGAWAI_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tambahPegawai = (nip, nama, alamat) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PEGAWAI_TAMBAH_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      '/api/pegawai',
      { nip, nama, alamat },
      config
    );

    dispatch({
      type: PEGAWAI_TAMBAH_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PEGAWAI_TAMBAH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePegawai = (pegawai) => async (dispatch) => {
  try {
    dispatch({
      type: PEGAWAI_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.put(
      `/api/pegawai/${pegawai.nip}`,
      pegawai,
      config
    );

    dispatch({
      type: PEGAWAI_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PEGAWAI_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePegawai = (nip) => async (dispatch) => {
  try {
    dispatch({
      type: PEGAWAI_DELETE_REQUEST,
    });

    await axios.delete(`/api/pegawai/${nip}`);

    dispatch({
      type: PEGAWAI_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PEGAWAI_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
