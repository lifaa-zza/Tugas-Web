// Ambil semua tombol open dan close
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Tambahkan event untuk tiap tombol
openButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const modal = btn.nextElementSibling; // ambil modal setelah tombol
    modal.classList.add('show'); // tampilkan modal
  });
});

closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.closest('.modal-container').classList.remove('show'); // tutup modal
  });
});
