import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { LockClosedIcon } from "@heroicons/react/24/outline";

function LoginForm() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <LockClosedIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-xl p-5 font-medium text-center leading-6 text-gray-900"
                        >
                          Login Using Your Google Account
                        </Dialog.Title>

                        <input
                          type="text"
                          name="email"
                          id="email"
                          class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                          data-rounded="rounded-lg"
                          data-primary="blue-500"
                          placeholder="Email address"
                        />
                        <input
                          type="password"
                          name="password"
                          id="password"
                          class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
                          data-rounded="rounded-lg"
                          data-primary="blue-500"
                          placeholder="Password"
                        />
                        <div class="block">
                          <button
                            class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"
                            data-primary="blue-600"
                            data-rounded="rounded-lg"
                            onClick={() => setOpen(false)}
                          >
                            Login Using Google
                          </button>
                        </div>
                        <p class="w-full mt-4 text-sm text-center text-gray-500">
                          Don't have an account?{" "}
                          <button
                            href="#_"
                            class="text-blue-500 underline"
                            onClick={() => setOpen(false)}
                          >
                            Sign up here
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="flex justify-center items-center uppercase font-medium text-blue-500 leading-tight">
        You have successfully signed in!
      </div>
    </>
  );
}

export default LoginForm;
