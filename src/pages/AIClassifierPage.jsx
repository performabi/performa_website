import React, { useState } from 'react';

const AiClassifierPage = () => {
    // State to manage the visibility of the instructions box
    const [showInstructions, setShowInstructions] = useState(false);

    const toggleInstructions = () => {
        setShowInstructions(prevState => !prevState);
    };

    return (
        <div className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center bg-[#0A1929] text-gray-200 p-6">
            <div className="w-full max-w-3xl mx-auto bg-[#0D1117] border border-gray-800 rounded-lg shadow-xl p-8 md:p-12 text-center">
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#088f8f] mb-4">
                    AI Classifier - JGS
                </h1>

                <p className="text-lg text-gray-400 mb-8">
                    Please click on the button below to be redirected to the AI Classifier.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <button
                        onClick={toggleInstructions}
                        className="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
                    </button>
                    <a
                        href="https://performabi.pythonanywhere.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-[#088f8f] hover:bg-[#086086] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
                    >
                        Access AI Classifier
                    </a>
                </div>

                {/* Conditionally rendered instructions box */}
                {showInstructions && (
                    <div className="text-left bg-[#0A1929] border border-gray-700 rounded-lg p-6 animate-fade-in-down">
                        <h3 className="font-bold text-white mb-2">PLEASE NOTE:</h3>
                        <p className="text-gray-400 mb-6">
                            Loading the AI System may take up to 30 seconds. It will request a login and password to access it. Please request it directly if you didn't receive it.
                            <br />
                            Any queries, please let us know!
                        </p>

                        <h3 className="font-bold text-white mb-3">How to Use the System:</h3>
                        <ol className="list-decimal list-inside text-gray-400 space-y-2">
                            <li>Download the CSV from Starling Bank and MetroBank and load it to the designed field. You can click & browse or drag & drop the file.</li>
                            <li>Then, click the button - "PROCESS FILE".</li>
                            <li>The system may take up to 10 seconds to identify all the transactions, make the best suggestions and load.</li>
                            <li>Please check the suggested categories and store - amend if necessary using the dropdown menu.</li>
                            <li>Download the Classified Report by clicking on Export Classified Data (CSV).</li>
                        </ol>
                        <p className="font-bold text-white mt-4">All Done!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AiClassifierPage;

