import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as ChakraUI from '@chakra-ui/react';
import { Table } from 'react-bootstrap';
import Message from '../components/Message';
import Modal from '../components/Modal';
import { deletePegawai, listPegawai } from '../actions/pegawaiActions';
import { PEGAWAI_TAMBAH_RESET } from '../constants/pegawaiConstants';

const PegawaiScreen = () => {
  const dispatch = useDispatch();

  const pegawaiList = useSelector((state) => state.pegawaiList);
  const { loading: loadingList, error: errorList, pegawai } = pegawaiList;

  const pegawaiTambah = useSelector((state) => state.pegawaiTambah);
  const { success: successTambah } = pegawaiTambah;

  const pegawaiDelete = useSelector((state) => state.pegawaiDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = pegawaiDelete;

  const _deleteHandler = (nip) => {
    if (window.confirm('Apakah anda yakin?')) {
      dispatch(deletePegawai(nip));
    }
  };

  useEffect(() => {
    dispatch(listPegawai());
    dispatch({ type: PEGAWAI_TAMBAH_RESET });
  }, [dispatch, successTambah, successDelete]);

  return (
    <ChakraUI.Box textAlign="center" justifyContent="center">
      <ChakraUI.Heading as="h2" fontSize="md">
        Tabel List Pegawai
      </ChakraUI.Heading>
      <ChakraUI.Divider />
      <Modal />
      <ChakraUI.Box paddingTop="6">
        {loadingDelete && <ChakraUI.Spinner />}
        {successDelete && (
          <Message dismissible={'true'} variant="danger">
            Pegawai Dihapus!
          </Message>
        )}
        {errorDelete && <Message variant="success">{errorDelete}</Message>}
        {loadingList ? (
          <ChakraUI.Spinner />
        ) : errorList ? (
          <Message variant="danger">{errorList}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>NIP</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {pegawai.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.nip}</td>
                    <td>{item.nama}</td>
                    <td>{item.alamat}</td>
                    <td>
                      <ChakraUI.Stack
                        justifyContent="center"
                        spacing="1"
                        direction="row"
                      >
                        <Link to={`/pegawai/${item.nip}/edit`}>
                          <ChakraUI.Button size="sm" w="100" colorScheme="teal">
                            Edit
                          </ChakraUI.Button>
                        </Link>
                        <ChakraUI.Button
                          onClick={() => _deleteHandler(item.nip)}
                          size="sm"
                          w="100"
                          colorScheme="red"
                        >
                          Delete
                        </ChakraUI.Button>
                      </ChakraUI.Stack>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </ChakraUI.Box>
    </ChakraUI.Box>
  );
};

export default PegawaiScreen;
