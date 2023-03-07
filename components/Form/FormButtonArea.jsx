import React from "react";

function FormButtonArea({
  handleAddClick,
  invoice,
  discardForm,
  setDraft,
  setIsModalOpen,
}) {
  return (
    <>
      <div className="grid md:grid-cols-1 gap-6 mb-6">
        <button
          className=" px-4 py-3 mr-4 text-grey font-bold"
          type="button"
          onClick={() => handleAddClick()}
        >
          + Add New Item
        </button>
      </div>
      <div
        className={`flex items-center justify-${invoice ? "end" : "between"}`}
      >
        {!invoice && (
          <div>
            <button
              className=" px-4 py-3 mr-4 text-grey font-bold"
              type="button"
              onClick={() => discardForm()}
            >
              Discard
            </button>
          </div>
        )}

        <div className="flex items-center justify-end">
          {!invoice ? (
            <button
              className=" px-4 py-3 mr-4 bg-dark-open text-grey inline-flex items-center justify-center  border border-transparent rounded-full shadow-sm text-base font-bold  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
              onClick={() => setDraft(true)}
            >
              Save as Draft
            </button>
          ) : (
            <div>
              <button
                className=" px-4 py-3 mr-4 text-grey font-bold"
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          )}

          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-3 border border-transparent rounded-full shadow-sm text-base font-bold bg-purple text-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save{invoice ? " Changes" : " & Send"}
          </button>
        </div>
      </div>
    </>
  );
}

export default FormButtonArea;
