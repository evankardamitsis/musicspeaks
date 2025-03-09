import React from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    subtitle?: string;
    content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, subtitle, content }) => {
    if (!isOpen) return null;

    // Create portal to render modal at the document root
    return createPortal(
        <div className="fixed inset-0 z-[9999] bg-white">
            {/* Header with close button */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="px-6 py-4 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold">{title}</h3>
                        {subtitle && (
                            <h4 className="text-base font-bold text-[#082FFF] mt-1">{subtitle}</h4>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 p-2"
                        aria-label="Close modal"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scrollable content */}
            <div className="p-6 overflow-y-auto h-[calc(100vh-88px)]">
                <div
                    className="text-gray-700 prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>,
        document.body
    );
};

export default Modal; 