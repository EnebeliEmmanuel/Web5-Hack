import { url } from "./defns"
const protocol = `${url}/protocols/document` as const

const DocumentProtocol = {
  protocol,
  published: true,
  types: {
    document: {
      schema: `${protocol}/schema/document.json`,
      dataFormats: [
        "application/json"
      ]
    },
    blob: {
      schema: `${protocol}/schema/blob.json`,
      dataFormats: [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "application/pdf"
      ]
    }
  },
  structure: {
    document: {
      $actions: [
        {
          who: "anyone",
          can: "read"
        },
        {
          who: "anyone",
          can: "write"
        }
      ]
    },
    blob: {
      $actions: [
        {
          who: "anyone",
          can: "read"
        },
        {
          who: "anyone",
          can: "write"
        }
      ]
    }
  }
} as const

export namespace Record {
  type FileMeta = {
    id: string
    size: number
    type: string
    name: string
  }

  export type File = Blob

  export type Document = {
    title: string
    file: FileMeta,
    description?: string
    otherFiles: FileMeta[],
    profileId: string
    condition: string
    dateCreated: string
    dateModified: string
  };
}

export const did = "did:ion:EiAx_twrw3f0yLOv3Pe6pk4gWG4miV9SVXiHe_Q4lMn8Ow:eyJkZWx0YSI6eyJwYXRjaGVzIjpbeyJhY3Rpb24iOiJyZXBsYWNlIiwiZG9jdW1lbnQiOnsicHVibGljS2V5cyI6W3siaWQiOiJkd24tc2lnIiwicHVibGljS2V5SndrIjp7ImNydiI6IkVkMjU1MTkiLCJrdHkiOiJPS1AiLCJ4IjoiV1M1QXFqeDA1V2Z0YWMwYUhYRnpGNV9wZjM2eTVPQ0N0Qy1tM1lCTFo4WSJ9LCJwdXJwb3NlcyI6WyJhdXRoZW50aWNhdGlvbiJdLCJ0eXBlIjoiSnNvbldlYktleTIwMjAifSx7ImlkIjoiZHduLWVuYyIsInB1YmxpY0tleUp3ayI6eyJjcnYiOiJzZWNwMjU2azEiLCJrdHkiOiJFQyIsIngiOiJpSnpYYkljR0FHdm1QMzd2Z2VfTjB1M3FadllmLWpteGdyM2RTaDUtOE5vIiwieSI6InBBc1BuQ1hLcXlXRWhiS1ZDWjFJejhrWkljVVRXQXBNS2NOS3VtQ3R4T2cifSwicHVycG9zZXMiOlsia2V5QWdyZWVtZW50Il0sInR5cGUiOiJKc29uV2ViS2V5MjAyMCJ9XSwic2VydmljZXMiOlt7ImlkIjoiZHduIiwic2VydmljZUVuZHBvaW50Ijp7ImVuY3J5cHRpb25LZXlzIjpbIiNkd24tZW5jIl0sIm5vZGVzIjpbImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduNSIsImh0dHBzOi8vZHduLnRiZGRldi5vcmcvZHduMyJdLCJzaWduaW5nS2V5cyI6WyIjZHduLXNpZyJdfSwidHlwZSI6IkRlY2VudHJhbGl6ZWRXZWJOb2RlIn1dfX1dLCJ1cGRhdGVDb21taXRtZW50IjoiRWlBSVIyQWFjQXZFVi16ODgwWHl2eHB4bWMzWDJkbDdYVmcwRHdWTGtfTms0QSJ9LCJzdWZmaXhEYXRhIjp7ImRlbHRhSGFzaCI6IkVpRGlvWktVc3cyZ0gzU29Nb0V5T0duVE9NQkZURFhZZ1hFX3Z6am5RU0M5aUEiLCJyZWNvdmVyeUNvbW1pdG1lbnQiOiJFaUQzU0JIaEtXXzduUF9QamV1WDcybDRjcXVTMWVPVTBCUk1EcW1vdnFpVGxnIn19"

export default DocumentProtocol
