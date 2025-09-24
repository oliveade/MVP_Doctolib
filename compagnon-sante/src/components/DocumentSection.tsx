export default function DocumentSection({
  onView,
  onComplete,
}: {
  onView: () => void;
  onComplete: () => void;
}) {
  return (
    <div className="rounded-2xl bg-white shadow-md p-4">
      <h3 className="text-lg font-semibold">Documents</h3>

      <button
        onClick={onView}
        className="mt-3 w-full h-12 rounded-xl bg-[#0E73B8] text-white font-semibold"
      >
        📄 Voir mes documents
      </button>

      <button
        onClick={onComplete}
        className="mt-3 w-full h-12 rounded-xl border-2 border-[#0E73B8] text-[#0E73B8] font-semibold bg-white"
      >
        ➕ Complétez mes documents
      </button>
    </div>
  );
}
