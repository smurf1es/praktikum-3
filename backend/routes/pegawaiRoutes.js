import express from 'express';
import {
  getPegawai,
  createPegawai,
  updatePegawai,
  deletePegawai
} from '../controllers/pegawaiController.js';

const router = express.Router();

router.route('/').post(createPegawai).get(getPegawai);
router.route('/:nip').put(updatePegawai).delete(deletePegawai);

export default router;