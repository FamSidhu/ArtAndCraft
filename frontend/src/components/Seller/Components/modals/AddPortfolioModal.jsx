import React, { useEffect } from 'react';

const AddPortfolioModal = ({ isOpen, onClose }) => {
  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 z-50 overflow-y-auto flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-content bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-center border-b p-6">
          <h3 className="text-xl font-semibold">Add New Project</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <div className="p-6">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project-title" className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                <input 
                  type="text" 
                  id="project-title" 
                  placeholder="Enter project title" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="project-category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select 
                  id="project-category" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">Select a category</option>
                  <option value="paintings">Paintings</option>
                  <option value="sculptures">Sculptures</option>
                  <option value="exhibitions">Exhibitions</option>
                  <option value="workshops">Workshops</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="project-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea 
                id="project-description" 
                rows="4" 
                placeholder="Enter project description" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Images</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-2"></i>
                <p className="text-gray-500">Drag and drop images here, or click to browse</p>
                <p className="text-xs text-gray-400 mt-1">JPEG, PNG, GIF up to 5MB</p>
                <input type="file" className="hidden" multiple accept="image/*" />
                <button type="button" className="border border-gray-700 mt-4 py-2 px-4 rounded-lg hover:bg-gray-100">Select Files</button>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {/* Preview images will appear here */}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project-date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input 
                  type="date" 
                  id="project-date" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label htmlFor="project-location" className="block text-sm font-medium text-gray-700 mb-1">Location (optional)</label>
                <input 
                  type="text" 
                  id="project-location" 
                  placeholder="e.g., New York Gallery" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button 
                type="button" 
                onClick={onClose} 
                className="border border-gray-700 py-2 px-6 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800"
              >
                Create Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPortfolioModal;