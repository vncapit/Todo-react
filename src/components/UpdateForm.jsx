const UpdateForm = ({
    updateData,
    setUpdateData,
    updateTask,
    cancelUpdate,
}) => {
    return (
        <div className="row">
            <div className="col">
                <input
                    onChange={(e) =>
                        setUpdateData({
                            ...updateData,
                            title: e.target.value,
                        })
                    }
                    className="form-control form-control-lg"
                    value={updateData.title}
                />
            </div>
            <div className="col-auto">
                <button
                    className="btn btn-lg btn-success me-4"
                    disabled={!updateData.title.trim()}
                    onClick={() => updateTask()}
                >
                    Update
                </button>
                <button
                    onClick={() => cancelUpdate()}
                    className="btn btn-lg btn-warning"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default UpdateForm;
