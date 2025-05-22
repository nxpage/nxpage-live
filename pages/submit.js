export default function Submit() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Submit Operator Profile</h1>
      <form
        action="https://formspree.io/f/xrbqvgda" 
        method="POST"
        className="space-y-4"
      >
        <input name="name" required placeholder="Name" className="w-full border rounded px-3 py-2" />
        <input name="role" required placeholder="Role / Vibe" className="w-full border rounded px-3 py-2" />
        <input name="tags" required placeholder="Tags (comma-separated)" className="w-full border rounded px-3 py-2" />
        <textarea name="bio" placeholder="Tell us what you're about" className="w-full border rounded px-3 py-2" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700" type="submit">
          Submit Profile
        </button>
      </form>
    </div>
  );
}