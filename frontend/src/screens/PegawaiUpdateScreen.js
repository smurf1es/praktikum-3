import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import * as Chakra from '@chakra-ui/react';
import Message from '../components/Message';
import { updatePegawai } from '../actions/pegawaiActions';
import { PEGAWAI_UPDATE_RESET } from '../constants/pegawaiConstants';

const PegawaiUpdateScreen = ({ match, history }) => {
  const nipTerpilih = match.params.nip;
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');

  const dispatch = useDispatch();

  const pegawaiList = useSelector((state) => state.pegawaiList);
  const { pegawai } = pegawaiList;

  const pegawaiUpdate = useSelector((state) => state.pegawaiUpdate);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = pegawaiUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PEGAWAI_UPDATE_RESET });
      history.push('/pegawai');
    }
  }, [dispatch, history, pegawai, nipTerpilih, successUpdate]);

  const _submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePegawai({
        nip: nipTerpilih,
        nama,
        alamat,
      })
    );
  };

  return (
    <>
      <Link className="text-decoration-none" to="/pegawai">
        <Chakra.Button colorScheme="teal" variant="outline">
          Go Back
        </Chakra.Button>
      </Link>
      <Chakra.Box paddingTop="12" textAlign="center" justifyContent="center">
        <h1>Edit Pegawai</h1>
        {loadingUpdate && <Chakra.Spinner />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        <Chakra.Box textAlign="initial">
          <ReactBootstrap.Form onSubmit={_submitHandler}>
            <ReactBootstrap.Form.Group controlId="nama">
              <ReactBootstrap.Form.Label>Nama</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control
                type="name"
                placeholder="Masukkan alamat"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              ></ReactBootstrap.Form.Control>
            </ReactBootstrap.Form.Group>

            <ReactBootstrap.Form.Group controlId="alamat">
              <ReactBootstrap.Form.Label>Alamat</ReactBootstrap.Form.Label>
              <ReactBootstrap.Form.Control
                type="text"
                placeholder="Masukkan alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              ></ReactBootstrap.Form.Control>
            </ReactBootstrap.Form.Group>

            <Chakra.Button
              display="block"
              mx="auto"
              px="12"
              type="submit"
              size="md"
              colorScheme="teal"
            >
              Update
            </Chakra.Button>
          </ReactBootstrap.Form>
        </Chakra.Box>
      </Chakra.Box>
    </>
  );
};

export default PegawaiUpdateScreen;
