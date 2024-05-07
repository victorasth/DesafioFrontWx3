const productsPerPage = 4;
let currentPage = 1;

const products = document.querySelectorAll('.products');
const totalProducts = products.length;
const totalPages = Math.ceil(totalProducts / productsPerPage);

function showPage(page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    products.forEach((product, index) => {
        if (index >= startIndex && index < endIndex) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

document.getElementById('nextPage').addEventListener('click', nextPage);
document.getElementById('previousPage').addEventListener('click', previousPage);

showPage(currentPage);

// Destaques Pagination
const destaquesPerPage = 4;
let destaquesCurrentPage = 1;

const destaques = document.querySelectorAll('.lancamentosContainer .products.destaque');
const totalDestaques = destaques.length;
const totalDestaquesPages = Math.ceil(totalDestaques / destaquesPerPage);

function showDestaquesPage(page) {
    const startIndex = (page - 1) * destaquesPerPage;
    const endIndex = startIndex + destaquesPerPage;

    destaques.forEach((destaque, index) => {
        if (index >= startIndex && index < endIndex) {
            destaque.style.display = 'block';
        } else {
            destaque.style.display = 'none';
        }
    });
}

function nextDestaquesPage() {
    if (destaquesCurrentPage < totalDestaquesPages) {
        destaquesCurrentPage++;
        showDestaquesPage(destaquesCurrentPage);
    }
}

function previousDestaquesPage() {
    if (destaquesCurrentPage > 1) {
        destaquesCurrentPage--;
        showDestaquesPage(destaquesCurrentPage);
    }
}

document.getElementById('destaquesNextPage').addEventListener('click', nextDestaquesPage);
document.getElementById('destaquesPreviousPage').addEventListener('click', previousDestaquesPage);

showDestaquesPage(destaquesCurrentPage);
