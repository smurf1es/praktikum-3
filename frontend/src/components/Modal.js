import React, { useState } from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import * as ChakraUI from '@chakra-ui/react';
import { tambahPegawai } from '../actions/pegawaiActions';

const Modal = () => {
  const [nip, setNip] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const { isOpen, onOpen, onClose } = ChakraUI.useDisclosure();
  const dispatch = useDispatch();

  const pegawaiTambah = useSelector((state) => state.pegawaiTambah);
  const {
    loading: loadingTambah,
    success: successTambah,
    error: errorTambah,
  } = pegawaiTambah;

  const _tambahHandler = () => {
    dispatch(tambahPegawai(nip, nama, alamat));
  };

  return (
    <ChakraUI.Box>
      <ChakraUI.Box paddingTop="6" display="flex" justifyContent="center">
        <ChakraUI.Button onClick={onOpen} colorScheme="teal" variant="outline">
          Create a Pegawai
        </ChakraUI.Button>
      </ChakraUI.Box>
      <ChakraUI.Modal isOpen={isOpen} onClose={onClose}>
        <ChakraUI.ModalOverlay />
        <form onSubmit={_tambahHandler}>
          {loadingTambah ? (
            <ChakraUI.ModalContent
              display="block"
              w="100"
              h="100"
              padding="24"
              textAlign="center"
            >
              <ChakraUI.Spinner />
            </ChakraUI.ModalContent>
          ) : (
            <ChakraUI.ModalContent>
              <ChakraUI.ModalHeader>Tambah Pegawai</ChakraUI.ModalHeader>
              <ChakraUI.ModalCloseButton />
              <ChakraUI.ModalBody pb={6}>
                <ChakraUI.FormControl>
                  <ChakraUI.FormLabel>Nomor Induk</ChakraUI.FormLabel>
                  <ChakraUI.Input
                    onChange={(e) => setNip(e.target.value)}
                    placeholder="Masukkan NIP"
                    required
                    value={nip}
                  />
                </ChakraUI.FormControl>

                <ChakraUI.FormControl mt={4}>
                  <ChakraUI.FormLabel>Nama Lengkap</ChakraUI.FormLabel>
                  <ChakraUI.Input
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan nama"
                    required
                    value={nama}
                  />
                </ChakraUI.FormControl>

                <ChakraUI.FormControl mt={4}>
                  <ChakraUI.FormLabel>Alamat</ChakraUI.FormLabel>
                  <ChakraUI.Input
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Masukkan alamat"
                    required
                    value={alamat}
                  />
                </ChakraUI.FormControl>
              </ChakraUI.ModalBody>

              <ChakraUI.ModalFooter>
                <ChakraUI.Button type="submit" colorScheme="blue" mr={3}>
                  Tambah
                </ChakraUI.Button>
                <ChakraUI.Button onClick={onClose}>Cancel</ChakraUI.Button>
              </ChakraUI.ModalFooter>
            </ChakraUI.ModalContent>
          )}

          {successTambah && (
            <Message variant="success">{successTambah}</Message>
          )}
          {errorTambah && <Message variant="danger">{errorTambah}</Message>}
        </form>
      </ChakraUI.Modal>
    </ChakraUI.Box>
  );
};

export default Modal;
