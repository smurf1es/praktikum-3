import Pegawai from '../models/pegawaiModel.js';
import asyncHandler from 'express-async-handler';

// @desc Create a new pegawai
// @route POST /api/pegawai
// @access Public
const createPegawai = asyncHandler(async (req, res) => {
  const { nip, nama, alamat } = req.body;
  const pegawaiExists = await Pegawai.findOne({ nip });

  if (pegawaiExists) {
    res.status(400);
    throw new Error('Pegawai sudah ada');
  }

  const pegawai = await Pegawai.create({
    nip,
    nama,
    alamat,
  });

  if (pegawai) {
    res.status(201).json({
      _id: pegawai._id,
      nip: pegawai.nip,
      nama: pegawai.nama,
      alamat: pegawai.alamat,
    });
  } else {
    res.status(400);
    throw new Error('Format tidak valid');
  }
});

// @desc Update pegawai
// @route PUT /api/pegawai/:nip
// @access Public
const updatePegawai = asyncHandler(async (req, res) => {
  const { nip } = req.params;
  const pegawai = await Pegawai.findOne({ nip });

  if (pegawai) {
    pegawai.nama = req.body.nama || pegawai.nama;
    pegawai.alamat = req.body.alamat || pegawai.alamat;

    const updatedPegawai = await pegawai.save();

    res.json({
      _id: updatedPegawai._id,
      nip: updatedPegawai.nip,
      nama: updatedPegawai.nama,
      alamat: updatedPegawai.alamat,
    });
  } else {
    res.status(404);
    throw new Error('Pegawai dengan NIP tersebut tidak ada!');
  }
});

// @desc Delete pegawai
// @route DELETE /api/pegawai/:nip
// @access Public
const deletePegawai = asyncHandler(async (req, res) => {
  const { nip } = req.params;
  const pegawai = await Pegawai.findOne({ nip });

  if (pegawai) {
    await pegawai.remove();
    res.json({ message: 'Pegawai dihapus!' });
  } else {
    res.status(404);
    throw new Error('Pegawai dengan NIP tersebut tidak ada!');
  }
});

// @desc get semua pegawai
// @route GET /api/pegawai
// @access Public
const getPegawai = asyncHandler(async (req, res) => {
  const pegawai = await Pegawai.find({});
  res.json(pegawai);
});

export { getPegawai, createPegawai, updatePegawai, deletePegawai };
