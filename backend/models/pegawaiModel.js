import mongoose from 'mongoose';

const pegawaiSchema = mongoose.Schema(
  {
    nip: {
      type: Number,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
);

const Pegawai = mongoose.model('Pegawai', pegawaiSchema);

export default Pegawai;