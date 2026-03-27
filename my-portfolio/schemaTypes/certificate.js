import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'certificate',
  title: 'Certificate',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Certificate Name',
      type: 'string',
    }),
    defineField({
      name: 'issuer',
      title: 'Issuer (Verən qurum)',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date (məs. "Mar 2024")',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Certificate Image / Badge',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'link',
      title: 'Verification Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Sıra (kiçik rəqəm əvvəl görünür)',
      type: 'number',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'issuer',
      media: 'image',
    },
  },
})
