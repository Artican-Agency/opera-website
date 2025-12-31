// Mock data for products by category

export interface Product {
  _id: string;
  title: string;
  product_img: string;
  product_pdf: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  rend: number;
}

export interface ProductResponse {
  data: Product[];
}

// Enduits products
const enduitsData: ProductResponse = {
  data: [
    {
      _id: "6736160cf3ccbb2105d2840d",
      title: "Enduit Op800",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731597840/opera/product/v5ydek4p0a36yxtjyhre.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731597870/documents/product/pdqkyabtk13a6jip1xo3.pdf",
      category: "enduits",
      createdAt: "2024-11-14T15:24:31.230Z",
      updatedAt: "2024-11-14T15:24:31.230Z",
      __v: 0,
      rend: 0.6
    },
    {
      _id: "67361660f3ccbb2105d28414",
      title: "Enduit OP700",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731597924/opera/product/jz5i5g4krqchpallei31.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731597956/documents/product/bfpjt7qrlowezvyjhmsj.pdf",
      category: "enduits",
      createdAt: "2024-11-14T15:25:57.454Z",
      updatedAt: "2024-11-14T15:25:57.454Z",
      __v: 0,
      rend: 0.35
    },
    {
      _id: "67361708f3ccbb2105d2841b",
      title: "Enduit Grand Travaux",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731598093/opera/product/xs6xjq2wwxoktedoeges.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731598125/documents/product/bu7pmz7hbhmrynrypxoh.pdf",
      category: "enduits",
      createdAt: "2024-11-14T15:28:46.275Z",
      updatedAt: "2024-11-14T15:28:46.275Z",
      __v: 0,
      rend: 0.3
    },
    {
      _id: "67361746f3ccbb2105d28422",
      title: "Enduit Placo",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731598205/opera/product/b7k70wtthud1l28zb9hs.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731598246/documents/product/vu2kd8galooifa482jsb.pdf",
      category: "enduits",
      createdAt: "2024-11-14T15:30:46.971Z",
      updatedAt: "2024-11-14T15:30:46.971Z",
      __v: 0,
      rend: 0.3
    },
    {
      _id: "673617d4f3ccbb2105d28424",
      title: "Enduit de Finition",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731598326/opera/product/ovp7ctknjii4rz2ycs0a.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731598353/documents/product/ckvb27lfg7cs4fpnl1ay.pdf",
      category: "enduits",
      createdAt: "2024-11-14T15:32:34.050Z",
      updatedAt: "2024-11-14T15:32:34.050Z",
      __v: 0,
      rend: 0.3
    },
    {
      _id: "6736184ff3ccbb2105d28426",
      title: "Enduit Etanche",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731598444/opera/product/iqgjjdkyp8bhngrfsre8.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731598472/documents/product/wbwhodurzsxi1osqc8zz.pdf",
      category: "enduits",
      createdAt: "2024-11-14T15:34:33.026Z",
      updatedAt: "2024-11-14T15:34:33.026Z",
      __v: 0,
      rend: 0.3
    },
    {
      _id: "673618dcf3ccbb2105d2842c",
      title: "Enduit de Charge",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731598607/opera/product/tqzkujt6tnkgwma3xjpo.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731598645/documents/product/vhwc3qehhbt7hwn1l5bd.pdf",
      category: "enduits",
      createdAt: "2024-11-14T15:37:25.980Z",
      updatedAt: "2024-11-14T15:37:25.980Z",
      __v: 0,
      rend: 0.4
    }
  ]
};

// Decors products
const decorsData: ProductResponse = {
  data: [
    {
      _id: "67348f06636a979f1452595b",
      title: "Carenya",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731497745/opera/product/cuafosiomfj2rwkxalaq.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731497747/documents/product/a2fmrq0h7yledowboh62.pdf",
      category: "decors",
      createdAt: "2024-11-13T11:35:48.599Z",
      updatedAt: "2024-11-13T11:35:48.599Z",
      __v: 0,
      rend: 2
    },
    {
      _id: "6735fd386fe1ab062b59ace8",
      title: "Alliage",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731591501/opera/product/ucqrxx4meu4p0t1kcsp3.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731591518/documents/product/dgla5ogab6mvjqv093pv.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:38:39.583Z",
      updatedAt: "2024-11-14T13:38:39.583Z",
      __v: 0,
      rend: 25
    },
    {
      _id: "6735fdad6fe1ab062b59acf5",
      title: "Antakya",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731591634/opera/product/b6inpylfzurypmedq84s.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731591652/documents/product/m62b3n8sqbpj5npdlljq.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:40:52.463Z",
      updatedAt: "2024-11-14T13:40:52.463Z",
      __v: 0,
      rend: 2
    },
    {
      _id: "6735ff1a6fe1ab062b59ad0c",
      title: "Draco",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731591982/opera/product/ajgr87dopvcmniuy1ft8.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592011/documents/product/le3shrop5atlvi9gxvns.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:46:52.088Z",
      updatedAt: "2024-11-14T13:46:52.088Z",
      __v: 0,
      rend: 25
    },
    {
      _id: "6735fef86fe1ab062b59ad08",
      title: "Cracklé",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731591981/opera/product/omlagtgv9c2wxvnsycg8.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592015/documents/product/ta2sllnnjw3dvkaovtpd.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:46:56.392Z",
      updatedAt: "2024-11-14T13:46:56.392Z",
      __v: 0,
      rend: 6
    },
    {
      _id: "6735ff9b6fe1ab062b59ad19",
      title: "Flaming",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731592096/opera/product/cavw6nfyijm2iuesespg.jpg",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592119/documents/product/qjwsaaxjoockvfkcvrqj.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:48:39.850Z",
      updatedAt: "2024-11-14T13:48:39.850Z",
      __v: 0,
      rend: 5
    },
    {
      _id: "6735ffa96fe1ab062b59ad1a",
      title: "El Harir",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731592154/opera/product/tubzsmbmosprtnwk8xam.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592169/documents/product/zptksltxtbmaz781c6ds.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:49:29.848Z",
      updatedAt: "2024-11-14T13:49:29.848Z",
      __v: 0,
      rend: 7
    },
    {
      _id: "6736000f6fe1ab062b59ad2c",
      title: "Glitter",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731592214/opera/product/pmguy3xtxdcjafhakiif.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592230/documents/product/ixpbzmkwpngpefq76nnz.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:50:31.404Z",
      updatedAt: "2024-11-14T13:50:31.404Z",
      __v: 0,
      rend: 0
    },
    {
      _id: "673600516fe1ab062b59ad36",
      title: "Lumineuse",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731592285/opera/product/ko5awn7zzgcwfihfhqg1.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592305/documents/product/ypl1dpz2ozelthpt8ned.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:51:46.646Z",
      updatedAt: "2024-11-14T13:51:46.646Z",
      __v: 0,
      rend: 11
    },
    {
      _id: "673600616fe1ab062b59ad39",
      title: "Leopard",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731592300/opera/product/rhcjkr31yn0uz5acebkt.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592331/documents/product/qjpyndvywiea6jdcd2sf.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:52:11.612Z",
      updatedAt: "2024-11-14T13:52:11.612Z",
      __v: 0,
      rend: 9
    },
    {
      _id: "673601056fe1ab062b59ad46",
      title: "Sandrose",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731592458/opera/product/hqtfqbi5ncez9vvpxwxv.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592473/documents/product/qdbk2qfj9stfxd3v9b9d.pdf",
      category: "decors",
      createdAt: "2024-11-14T13:54:34.327Z",
      updatedAt: "2024-11-14T13:54:34.327Z",
      __v: 0,
      rend: 6
    },
    {
      _id: "673602ce6fe1ab062b59ad57",
      title: "Perlato",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731592960/opera/product/hx3sncjgqtuliy0kmyrq.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731592986/documents/product/bh4ydvu9tjylpfyecfgo.pdf",
      category: "decors",
      createdAt: "2024-11-14T14:03:07.510Z",
      updatedAt: "2024-11-14T14:03:07.510Z",
      __v: 0,
      rend: 7
    },
    {
      _id: "673606af6fe1ab062b59ad73",
      title: "Vitro",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731593945/opera/product/t4u4xr3qv36dxngnkozw.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731593962/documents/product/jlhuljlvid1ven3co8pn.pdf",
      category: "decors",
      createdAt: "2024-11-14T14:19:23.508Z",
      updatedAt: "2024-11-14T14:19:23.508Z",
      __v: 0,
      rend: 2
    }
  ]
};

// Batiments products
const batimentsData: ProductResponse = {
  data: [
    {
      _id: "67348d78636a979f14525956",
      title: "Anti Taches",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731497341/opera/product/guae4vb0yiok021htwt4.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731497385/documents/product/hwgjgz7zyltxcj7j781z.pdf",
      category: "batiments",
      createdAt: "2024-11-13T11:29:46.211Z",
      updatedAt: "2024-11-13T11:29:46.211Z",
      __v: 0,
      rend: 12
    },
    {
      _id: "67348e2a636a979f14525958",
      title: "Black Mat",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731497552/opera/product/v6lpt8b9idjbjcvdntb7.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731497591/documents/product/fsao0xv1avqxpjbnbbru.pdf",
      category: "batiments",
      createdAt: "2024-11-13T11:33:12.031Z",
      updatedAt: "2024-11-13T11:33:12.031Z",
      __v: 0,
      rend: 6
    },
    {
      _id: "6735d6346fe1ab062b59ac3d",
      title: "Vinyle Extra plus",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731581551/opera/product/dg3jpakjmzbnkiqvz3ef.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731581584/documents/product/jecuqjzamflhkjyyknn9.pdf",
      category: "batiments",
      createdAt: "2024-11-14T10:53:04.856Z",
      updatedAt: "2024-11-14T10:53:04.856Z",
      __v: 0,
      rend: 8
    },
    {
      _id: "6735f5ac6fe1ab062b59ac4f",
      title: "Plafoni",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731589587/opera/product/wkg5vtdtexxzund46sz7.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731589619/documents/product/hrx1raxhexzg08pud8ah.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:06:59.941Z",
      updatedAt: "2024-11-14T13:06:59.941Z",
      __v: 0,
      rend: 10
    },
    {
      _id: "6735f67e6fe1ab062b59ac56",
      title: "Laque à eau 500",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731589796/opera/product/odaaekiguod4hlzjv1jn.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731589829/documents/product/egb8us13roxqrvk9azdb.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:10:29.871Z",
      updatedAt: "2024-11-14T13:10:29.871Z",
      __v: 0,
      rend: 16
    },
    {
      _id: "6735f7226fe1ab062b59ac5b",
      title: "Laque à eau 100",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731589947/opera/product/ulultbfdk7zq4rcydosa.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590005/documents/product/c3uqds4gic53bx1r6i5a.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:13:26.588Z",
      updatedAt: "2024-11-14T13:13:26.588Z",
      __v: 0,
      rend: 16
    },
    {
      _id: "6735f79f6fe1ab062b59ac66",
      title: "Fixateur+",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590082/opera/product/bgwpqwjz6msyaw63jmhe.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590104/documents/product/h6k1f8p7v5a94dze0wvc.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:15:05.316Z",
      updatedAt: "2024-11-14T13:15:05.316Z",
      __v: 0,
      rend: 8
    },
    {
      _id: "6735f8106fe1ab062b59ac76",
      title: "Satiné +",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590200/opera/product/gsfvj666ba2hwpzvpurm.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590237/documents/product/v9wdbmqhsnk396pw83oo.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:17:18.428Z",
      updatedAt: "2024-11-14T13:17:18.428Z",
      __v: 0,
      rend: 6
    },
    {
      _id: "6735f8b66fe1ab062b59ac7a",
      title: "Satiné color",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590337/opera/product/tfego429ybxwxrnlx4ni.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590369/documents/product/niw12wf9js4znmiaqqnc.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:19:30.315Z",
      updatedAt: "2024-11-14T13:19:30.315Z",
      __v: 0,
      rend: 6
    },
    {
      _id: "6735f91e6fe1ab062b59ac8b",
      title: "Mat",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590466/opera/product/hqoiyh8fe9wmg8mmlxir.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590492/documents/product/hpg6s3pjz0w2sfatqalu.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:21:32.888Z",
      updatedAt: "2024-11-14T13:21:32.888Z",
      __v: 0,
      rend: 6
    },
    {
      _id: "6735f9b66fe1ab062b59ac92",
      title: "Colle blanche",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590587/opera/product/z8cfz2rnwv3dmrnvxwri.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590615/documents/product/tajsiyd3wpffe6uuhscf.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:23:36.003Z",
      updatedAt: "2024-11-14T13:23:36.003Z",
      __v: 0,
      rend: 1.5
    },
    {
      _id: "6735f9f96fe1ab062b59ac97",
      title: "Etanche plus",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590694/opera/product/kzed9zkef3t4biduzzso.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590723/documents/product/i9yz8cejygtohz38skqh.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:25:23.406Z",
      updatedAt: "2024-11-14T13:25:23.406Z",
      __v: 0,
      rend: 1
    },
    {
      _id: "6735fa606fe1ab062b59ac99",
      title: "Façade",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590769/opera/product/e89u6ae7rghnfffbvscx.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590799/documents/product/c5yxoh27eqz9mwsd5xle.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:26:40.593Z",
      updatedAt: "2024-11-14T13:26:40.593Z",
      __v: 0,
      rend: 8
    },
    {
      _id: "6735faf56fe1ab062b59aca9",
      title: "Satiné",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731590941/opera/product/jpsqvtumjrkfga2crpmu.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731590971/documents/product/sr6dpr0rwer2wuayyqdt.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:29:31.452Z",
      updatedAt: "2024-11-14T13:29:31.452Z",
      __v: 0,
      rend: 6
    },
    {
      _id: "6735fc686fe1ab062b59acd3",
      title: "AntiBact",
      product_img: "http://res.cloudinary.com/dlua23dqn/image/upload/v1731591281/opera/product/zxwgence0n5pj4ckqv4n.png",
      product_pdf: "http://res.cloudinary.com/dlua23dqn/raw/upload/v1731591316/documents/product/tsedq2nupypyhv56ozrx.pdf",
      category: "batiments",
      createdAt: "2024-11-14T13:35:17.479Z",
      updatedAt: "2024-11-14T13:35:17.479Z",
      __v: 0,
      rend: 12
    }
  ]
};

/**
 * Get products by category from mock data
 * @param category - The product category (enduits, decors, or batiments)
 * @returns Promise that resolves to ProductResponse matching the API format
 */
export const getProductsByCategory = async (category: string): Promise<ProductResponse> => {
  // Simulate API delay for consistency
  await new Promise(resolve => setTimeout(resolve, 100));
  
  switch (category?.toLowerCase()) {
    case "enduits":
      return enduitsData;
    case "decors":
      return decorsData;
    case "batiments":
      return batimentsData;
    default:
      return { data: [] };
  }
};

