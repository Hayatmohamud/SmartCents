import { useDeleteTransaction } from "../hooks/useTransactions";

const TransactionsTable = ({ transactions, onEdit }) => {
  const { mutate: deleteMutate } = useDeleteTransaction();

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Recent Transactions
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b text-left text-sm uppercase text-slate-500">
              <th className="py-4">Title</th>
              <th className="py-4">Category</th>
              <th className="py-4">Type</th>
              <th className="py-4">Date</th>
              <th className="py-4">Amount</th>
              <th className="py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {transactions?.length > 0 ? (
              transactions.map((item) => {
                const id = item._id || item.id;

                return (
                  <tr key={id} className="border-b">
                    <td className="py-4">{item.title}</td>
                    <td className="py-4">{item.category}</td>
                    <td className="py-4">{item.type}</td>
                    <td className="py-4">
                      {item.date
                        ? new Date(item.date).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="py-4 font-semibold">
                      ${Number(item.amount).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => onEdit(item)}
                          className="text-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteMutate(id)}
                          className="text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="py-8 text-center text-slate-500">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionsTable;
