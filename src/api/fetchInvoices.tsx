const fetchInvoices = async () => {
  const result = await fetch("data.json");

  if (!result.ok) {
    throw new Error(`fetch not ok`);
  }

  return result.json();
};

export default fetchInvoices;
