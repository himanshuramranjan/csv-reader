const csvUtils = {};

csvUtils.parseCSV = (csv) => {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const row = {};
    const values = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      row[headers[j]] = values[j];
    }

    rows.push(row);
  }

  return rows;
};

module.exports = csvUtils;
