import React, { useState, Fragment } from "react";
import { XCircleIcon, ExclamationIcon, XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react"
import { isSetAccessor } from "typescript";

interface Props {
    open?: boolean;
    title?: string;
    description?: string;
    okText?: string;
    cancelText?: string;
    // onClose: (open: false) => void;
}

const ConfirmationDialog: React.FC<Props> = ({
    title,
    description,
    okText,
    cancelText,
    // onClose: setOpen,
}) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return(
        <>

            <button onClick={() => setIsDialogOpen(!isDialogOpen)} className="bg-primary-300 rounded-full p-4 py-2">Confirmation Dialog Button</button>
            <Transition.Root 
                show={isDialogOpen} 
                as={Fragment}
            >
                <Dialog open={isDialogOpen} onClose={setIsDialogOpen}>
                    <Transition.Child 
                        as={Fragment} 
                        enter="ease-out duration-1000"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 z-10 bg-black"></Dialog.Overlay>
                    </Transition.Child>

                    <Transition.Child 
                        as={Fragment}
                        enter="ease-out duration-1000"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-1000"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >

                        <div className="fixed flex flex-col items-center text-center top-0 bottom-1/3 right-1/3 rounded-md z-20 w-96 p-5 pt-40 transform bg-white">
                            <div className="absolute top-1/4 right-2">
                                <XIcon className="h-4 w-4 cursor-pointer" onClick={() => setIsDialogOpen(false)}></XIcon>
                            </div>
                            <div className="-mt-12">
                                <ExclamationIcon className="text-warn-500 h-28 w-28"></ExclamationIcon>
                            </div>
                            <h1 className="text-3xl">{title}</h1><br />
                            <p>
                                Do you really want to delete? This process
                                cannot be undone.
                            </p><br />
                            <div className="flex">
                                <button className="rounded px-4 py-2 mr-2 border tracking-widest bg-gray-400 text-white" onClick={() => setIsDialogOpen(false)}>{cancelText}</button>
                                <button className="rounded px-4 py-2 ml-2 border tracking-widest bg-warn-500 text-white" onClick={() => setIsDialogOpen(false)}>{okText}</button>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
        </>
    );
};

ConfirmationDialog.defaultProps = {
    open: false,
    title: "Are you sure?",
    okText: "Ok",
    cancelText: "Cancel",
};

export default React.memo(ConfirmationDialog);