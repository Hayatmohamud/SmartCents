import { ArrowUpRight, ArrowDownRight, Pencil, Trash2 } from "lucide-react";
import { useDeleteTransaction } from "../hooks/useTransactions";

const RecentTransactions = ({ transactions = [], onEdit }) => {
  const { mutate: deleteTransaction, isPending } = useDeleteTransaction();

  const handleEdit = (item) => {
    if (typeof onEdit === "function") {
      onEdit(item);
    }
  };

  const formatDate = (date) => {
    if (!date) return "No date";
    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return "Invalid date";
    return parsedDate.toLocaleDateString();
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-3xl font-bold text-slate-900">
        Recent Transactions
      </h2>

      {transactions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-200 px-6 py-10 text-center text-slate-500">
          No transactions found
        </div>
      ) : (
        <div className="space-y-4">
          {transactions.map((item) => {
            const id = item._id || item.id;
            const isIncome = item.type === "income";
            const amount = Number(item.amount || 0);

            return (
              <div
                key={id}
                className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      isIncome ? "bg-emerald-50" : "bg-red-50"
                    }`}
                  >
                    {isIncome ? (
                      <ArrowUpRight className="h-5 w-5 text-emerald-500" />
                    ) : (
                      <ArrowDownRight className="h-5 w-5 text-red-500" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title || "Untitled"}
                    </h3>
                    <p className="text-slate-500">
                      {item.category || "General"} • {formatDate(item.date)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <p
                    className={`text-2xl font-bold ${
                      isIncome ? "text-emerald-500" : "text-red-500"
                    }`}
                  >
                    {isIncome ? "+" : "-"}${amount.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleEdit(item)}
                    className="text-slate-700 transition hover:text-slate-900"
                    title="Edit transaction"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteTransaction(id)}
                    disabled={isPending}
                    className="text-red-500 transition hover:text-red-600 disabled:opacity-50"
                    title="Delete transaction"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
