<script>
  import { ditto } from './ditto';

  // Log the following values to the console
  // Example: Ditto's name
  console.log(ditto.name);

  // 1. The `id` of Ditto (132)
  console.log(ditto.id);

  // 2. Ditto's `base_experience` (101)
  console.log(ditto.base_experience);

  // 3. The `url` of Ditto's `species`
  console.log(ditto.species.url);

  // 4. The url of Ditto's `front_default` in `sprites`
  console.log(ditto.sprites.front_default);

  // 5. The `name` of Ditto's only `move` (transform)
  console.log(ditto.moves[0].move.name);

  // 6. The `name` of the `version` of Ditto's first `held_items` (ultra-moon)
  console.log(ditto.held_items[0].version_details[0].version.name);

</script>
<h1>Achievement 1</h1>
<p>See console for answers.</p>