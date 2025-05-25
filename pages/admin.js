const mockSubmissions = [
  { name: "Lani", role: "Aura Mapper", tags: ["#Presence"], bio: "I help creators feel seen in 30 mins or less." },
  { name: "Zee", role: "Client Whisperer", tags: ["#ClientEnergy", "#BrandFlex"], bio: "People trust me with the unseen." }
];

export default function Admin() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Review Panel</h1>
      {mockSubmissions.map((op, i) => (
        <form
          key={i}
          action="https://formspree.io/f/xrbqvgda"
          method="POST"
          className="border p-4 rounded mb-4 shadow-sm space-y-2"
        >
          <input type="hidden" name="name" value={op.name} />
          <input type="hidden" name="role" value={op.role} />
          <input type="hidden" name="tags" value={op.tags.join(", ")} />
          <input type="hidden" name="bio" value={op.bio} />
          <h2 className="font-semibold">{op.name} — {op.role}</h2>
          <p className="text-sm text-gray-600">{op.tags.join(" ")}</p>
          <p className="text-gray-800">{op.bio}</p>
          <div className="space-x-2 pt-2">
            <button type="submit" className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
            <button type="button" className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
          </div>
        </form>
      ))}
    </div>
  );
}