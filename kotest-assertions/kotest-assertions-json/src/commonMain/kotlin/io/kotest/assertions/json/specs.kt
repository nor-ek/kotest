import io.kotest.assertions.json.schema.JsonSchemaArraySerializer
import io.kotest.assertions.json.schema.JsonSchemaElement
import io.kotest.assertions.json.schema.SchemaDeserializer
import io.kotest.common.ExperimentalKotest
import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.buildClassSerialDescriptor
import kotlinx.serialization.descriptors.element
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.encoding.decodeStructure

data class ContainsSpec(val range: IntRange = 0..Int.MAX_VALUE, val schema: JsonSchemaElement)

@ExperimentalKotest
object ContainsSpecSerializer : KSerializer<ContainsSpec> {
   override val descriptor: SerialDescriptor = buildClassSerialDescriptor("ContainsSpec") {
      element<Double>("schema")
      element<Double>("minContains", isOptional = true)
      element<Double>("maxContains", isOptional = true)
   }

   override fun deserialize(decoder: Decoder): ContainsSpec =
      decoder.decodeStructure(descriptor) {
         val minContains = kotlin.runCatching { decodeIntElement(descriptor, 2) }.getOrDefault(0)
         val maxContains = kotlin.runCatching { decodeIntElement(descriptor, 3) }.getOrDefault(Int.MAX_VALUE)
         val schema = decodeSerializableElement(descriptor, 1, SchemaDeserializer)
         ContainsSpec(range = minContains..maxContains, schema)
      }

   override fun serialize(encoder: Encoder, value: ContainsSpec) {
      TODO("Not yet implemented")
   }
}
