import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Screenshot / Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'tags',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'github',
      title: 'GitHub Link',
      type: 'url',
    }),
    defineField({
      name: 'live',
      title: 'Live Demo Link',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Featured (ön plana çıxsın)',
      type: 'boolean',
      initialValue: false,
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
      media: 'image',
      subtitle: 'description',
    },
  },
})
