<template>
  <figure>
    <div class="overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-4 md:p-6">
      <svg
        class="h-auto min-w-[960px]"
        viewBox="0 0 1200 780"
        role="img"
        aria-labelledby="industry-structure-title industry-structure-desc"
      >
        <title id="industry-structure-title">臺灣電線電纜產業結構</title>
        <desc id="industry-structure-desc">由銅材與絕緣材料供應，連結五類線纜製造業、經銷代理商與下游應用產業的供應鏈圖。</desc>

        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 8 4 0 8Z" fill="#596778" />
          </marker>
        </defs>

        <g fill="none" stroke="#8b98a7" stroke-width="3" marker-end="url(#arrow)">
          <path d="M166 342H210" />
          <path d="M356 342H400" />
          <path d="M546 342H575V84H600" />
          <path d="M575 216H600M575 348H600M575 480H600M575 612H600" />
          <path d="M480 432V370H575M480 526V500H575" />

          <path d="M746 84H782V48H808M782 84v58h26" />
          <path d="M942 48h28v-24h28M970 48v48h28" />
          <path d="M942 142h28v-2h28M970 142v62h28" />

          <path d="M746 216H808" />
          <path d="M942 216h28v-52h28M970 216v0h28M970 216v52h28" />

          <path d="M746 348H808" />
          <path d="M942 348h28v-24h28M970 348v48h28" />

          <path d="M746 480H808" />
          <path d="M942 480h28v-52h28M970 480v0h28M970 480v52h28" />

          <path d="M746 612H808" />
          <path d="M942 612h28v-24h28M970 612v48h28" />
        </g>

        <g font-family="Noto Sans TC, Microsoft JhengHei, sans-serif" font-size="20" font-weight="700" text-anchor="middle">
          <g>
            <rect x="20" y="300" width="146" height="84" rx="6" fill="#ffffff" stroke="#9f1420" stroke-width="3" />
            <text x="93" y="334" fill="#171b21"><tspan x="93">電解銅板</tspan><tspan x="93" dy="26">進口商</tspan></text>
          </g>
          <g>
            <rect x="210" y="300" width="146" height="84" rx="6" fill="#ffffff" stroke="#9f1420" stroke-width="3" />
            <text x="283" y="334" fill="#171b21"><tspan x="283">銅條</tspan><tspan x="283" dy="26">熔煉廠</tspan></text>
          </g>
          <g>
            <rect x="400" y="300" width="146" height="84" rx="6" fill="#e60012" />
            <text x="473" y="334" fill="#ffffff"><tspan x="473">裸銅線</tspan><tspan x="473" dy="26">加工廠</tspan></text>
          </g>
          <g font-size="18">
            <rect x="400" y="402" width="160" height="62" rx="6" fill="#eef2f5" stroke="#596778" stroke-width="2" />
            <text x="480" y="428" fill="#171b21"><tspan x="480">PE／XLPE</tspan><tspan x="480" dy="23">材料進口商</tspan></text>
            <rect x="400" y="496" width="160" height="62" rx="6" fill="#eef2f5" stroke="#596778" stroke-width="2" />
            <text x="480" y="522" fill="#171b21"><tspan x="480">PVC／PE</tspan><tspan x="480" dy="23">粒料製造商</tspan></text>
          </g>

          <g fill="#242b34">
            <rect x="600" y="42" width="146" height="84" rx="6" /><rect x="600" y="174" width="146" height="84" rx="6" />
            <rect x="600" y="306" width="146" height="84" rx="6" /><rect x="600" y="438" width="146" height="84" rx="6" />
            <rect x="600" y="570" width="146" height="84" rx="6" />
          </g>
          <g fill="#ffffff">
            <text x="673" y="76"><tspan x="673">電子線</tspan><tspan x="673" dy="26">製造業</tspan></text>
            <text x="673" y="208"><tspan x="673">漆包線</tspan><tspan x="673" dy="26">製造業</tspan></text>
            <text x="673" y="340"><tspan x="673">電力線</tspan><tspan x="673" dy="26">製造業</tspan></text>
            <text x="673" y="472"><tspan x="673">通信線／光纜</tspan><tspan x="673" dy="26">製造業</tspan></text>
            <text x="673" y="604"><tspan x="673">建築線</tspan><tspan x="673" dy="26">製造業</tspan></text>
          </g>

          <g font-size="18">
            <g fill="#ffffff" stroke="#596778" stroke-width="2">
              <rect x="808" y="18" width="134" height="60" rx="6" />
              <rect x="808" y="112" width="134" height="60" rx="6" />
              <rect x="808" y="186" width="134" height="60" rx="6" />
              <rect x="808" y="318" width="134" height="60" rx="6" />
              <rect x="808" y="450" width="134" height="60" rx="6" />
              <rect x="808" y="582" width="134" height="60" rx="6" />
            </g>
            <g fill="#171b21">
              <text x="875" y="55">裁組線加工廠</text>
              <text x="875" y="149">經銷代理商</text>
              <text x="875" y="223">經銷代理商</text>
              <text x="875" y="355">經銷代理商</text>
              <text x="875" y="487">經銷代理商</text>
              <text x="875" y="619">經銷代理商</text>
            </g>
          </g>

          <g font-size="18" fill="#171b21">
            <g fill="#ffffff" stroke="#9aa5b2" stroke-width="2">
              <rect x="998" y="0" width="182" height="48" rx="6" /><rect x="998" y="72" width="182" height="48" rx="6" />
              <rect x="998" y="116" width="182" height="48" rx="6" /><rect x="998" y="180" width="182" height="48" rx="6" /><rect x="998" y="244" width="182" height="48" rx="6" />
              <rect x="998" y="300" width="182" height="48" rx="6" /><rect x="998" y="372" width="182" height="48" rx="6" />
              <rect x="998" y="404" width="182" height="48" rx="6" /><rect x="998" y="456" width="182" height="48" rx="6" /><rect x="998" y="508" width="182" height="48" rx="6" />
              <rect x="998" y="564" width="182" height="48" rx="6" /><rect x="998" y="636" width="182" height="48" rx="6" />
            </g>
            <text x="1089" y="31">家電製造業</text><text x="1089" y="103">電腦資訊業</text>
            <text x="1089" y="147">電子器材業</text><text x="1089" y="211">馬達、變壓器製造業</text><text x="1089" y="275">電扇及家電製造業</text>
            <text x="1089" y="331">電子線圈製造業</text><text x="1089" y="403">電力公司</text>
            <text x="1089" y="435">電力工程公司</text><text x="1089" y="487">電信局</text><text x="1089" y="539">電信工程公司</text>
            <text x="1089" y="595">通信器材業</text>
            <text x="1089" y="656"><tspan x="1089">水電工程行</tspan><tspan x="1089" dy="20">營建工程公司</tspan></text>
          </g>

          <g font-size="15" font-weight="900" letter-spacing="0">
            <text x="93" y="426" fill="#9f1420">原料</text>
            <text x="473" y="602" fill="#596778">材料供應</text>
            <text x="673" y="700" fill="#596778">線纜製造</text>
            <text x="875" y="700" fill="#596778">通路</text>
            <text x="1089" y="700" fill="#596778">終端應用</text>
          </g>
        </g>
      </svg>
    </div>
    <figcaption class="mt-3 text-sm leading-6 text-slate-500">
      依原公會網站產業結構圖重繪；手機可左右滑動查看完整供應鏈。
    </figcaption>
  </figure>
</template>
