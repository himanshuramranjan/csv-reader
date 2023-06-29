const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('keyup', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const rows = document.querySelectorAll('tbody tr');

      rows.forEach((row) => {
        const cells = row.getElementsByTagName('td');
        let foundMatch = false;

        for (let i = 0; i < cells.length; i++) {
          const cellValue = cells[i].innerText.toLowerCase();
          if (cellValue.includes(searchTerm)) {
            foundMatch = true;
            break;
          }
        }

        row.style.display = foundMatch ? '' : 'none';
      });
    });