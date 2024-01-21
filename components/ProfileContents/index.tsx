"use client"

import { profileData } from "@/data"

export default function ProfileContents() {
  
  return (
    <div className="my-5">
      <div className="md:max-w-[460px] mx-auto rounded-lg border-[1px] px-4 shadow-lg">
        <ul role="list" className="divide-y divide-gray-100">
          {profileData.map((profile, index) => (
            <li
              key={index}
              className="flex justify-between gap-x-6 py-2"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{profile.name_en}</p>
                  <p className="text-sm font-semibold leading-6 text-gray-900">{profile.name_ja}</p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end w-1/2">
                <p className="mt-1 text-xs leading-5 text-gray-500">{profile.value_en}</p>
                <p className="text-sm leading-6 text-gray-900">{profile.value_ja}</p>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}