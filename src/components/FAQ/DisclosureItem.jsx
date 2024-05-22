'use client';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const DisclosureItem = ({ question, answer }) => (
  <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
            <span>{question}</span>
            <ChevronUpIcon className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-purple-500`} />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
            {answer}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  </div>
);

export default DisclosureItem;
