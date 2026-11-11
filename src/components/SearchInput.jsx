function SearchInput({search, setSearch}) {
  return (
    <input className="bg-amber-50 text-black p-2" type="text" placeholder="Search Rick and Morty Character..." value={search} onChange={(e) => setSearch(e.target.value)} />
  );
}

export default SearchInput;