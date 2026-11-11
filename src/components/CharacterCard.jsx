function CharacterCard({name, image}) {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden text-center">
      <img src={image} alt={name} className="w-full h-auto object-cover" />
      <p className="p-4 text-lg font-semibold">{name}</p>
    </div>
  );
}

export default CharacterCard;