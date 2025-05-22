import { useState } from "react";

export default function Connect() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Request a Shadow Session</h1>
      <form
        action="https://formspree.io/f/xrbqvgda"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_replyto" value="nxpage.contact@gmail.com" />
        <input type="hidden" name="_subject" value="New Shadow Request on NXPAGE" />
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full border rounded px-3 py-2"
        />
        <select
          name="sessionType"
          required
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select session type</option>
          <option value="day-pass">Day Pass</option>
          <option value="weekly-check">Weekly Check-In</option>
          <option value="irl-shadow">IRL Shadow Day</option>
        </select>
        <input
          type="date"
          name="date"
          required
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          name="notes"
          placeholder="Why do you want to shadow this person?"
          required
          className="w-full border rounded px-3 py-2"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Send Request
        </button>
      </form>
    </div>
  );
}