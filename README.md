<h2>1:xserver(※public_htmlディレクトリにbuildを出力するように合わせる。) & nextjsの連携</h2>
1-1:.nextのパス設定 = (https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next.config.js/setting-a-custom-build-directory)
 => next.config.js > {
  distdir（）: 設定なし。ルートディレクトリでOK。
}
1-2_next出力先ディレクトリ変更。 = cd(https://nextjs-ja-translation-docs.vercel.app/docs/api-reference/next.config.js/exportPathMap)
package.json>script.build : "next build && next export -o public_html"

2:ルーティング設定
2-1: (foldername)/index.tsx　で固定。ルーティング先が増えた時もネストでの対応を行いやすいため。pages内はコンポネントの呼び出しにとどめないとビルドが重くなるため。nextjsのドキュメント（https://nextjs.org/docs/routing/introduction）に最初に紹介されていたため。

<h2>3:グラフ表示、技術選定cf(https://js.libhunt.com/categories/15-data-visualization)</h2>
<h3>3-1:概要と例を見て比較。%：実現像との合致度</h3>
<ul>
<li>Threejs：文字情報の表示に<a href="https://github.com/mrdoob/three.js/">3D</a>は過度。使用例：10%
</li>
<li>vega:Vegaは、インタラクティブな視覚化デザインを作成、保存、共有するための宣言型言語である視覚化文法です。Vegaを使えば、ビジュアライゼーションの外観とインタラクティブな動作をJSON形式で記述し、CanvasやSVGを使ってウェブベースのビューを生成することができます。
<a href="https://vega.github.io/vega/examples/">使用例</a>:40%. 見た目の柔軟性が少ない。引き続き他のライブラリと比べデータの書き方等、開発側の柔軟性が優れていないかを調べる。</li>
<li>
<a href="https://github.com/chartjs/Chart.js">"chart.js"</a>:%.
<a href="https://www.chartjs.org/docs/latest/samples/information.html">使用例</a>:20%.数値でのグラフに特化。位置関係を大まかに知れる表示にはなっておらず数値による表示を行っている。
</li>
<li>
<a href="https://www.sigmajs.org/">"sigma.js"</a>:80%.実現させたいことと、この技術の目的が近い。2014年に公開(*Why should I use sigma.js and not d3.js?
Sigma.js renders graphs using WebGL. It allows drawing larger graphs faster than with Canvas or SVG based solutions. It also makes custom rendering way harder to develop. If you have small graphs (like a few hundreds of nodes and edges) and/or if you need very customized rendering, then d3.js is indeed a best fit for you.)
https://www.sigmajs.org/ -> https://github.com/sim51/react-sigma
<a href="https://www.sigmajs.org/#usecases">使用例</a>:90%.
</li>
<li>
<a href="https://d3js.org/">"d3"</a>:90%.sigmaより前に公開。メンテナンス頻度、<a href="https://medium.com/react-courses/minimum-starter-nextjs-server-side-rendering-ssl-for-d3js-typescript-project-7a1258ca8883">nextjs & d3</a>
<a href="https://observablehq.com/@d3/gallery">使用例</a>:90%.
</li>

</ul>

<h3>4-1.データベースへの接続テスト</h3>
<a href="https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-mysql">prisma 導入検討</a>

<h3>5-1.フォームの構築</h3>
<a href="https://nextjs.org/docs/guides/building-forms">form structure</a>

ファイルルール
・自作フォルダは頭文字大文字、URLの表示ディレクトリは小文字、

<p>memo<br>
-tsconfig.json>compileoption.module = "commonjs" cf)https://stackoverflow.com/questions/58384179/syntaxerror-cannot-use-import-statement-outside-a-module


</p>

















This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
