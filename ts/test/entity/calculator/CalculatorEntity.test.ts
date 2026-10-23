

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LicenceFeeTableSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CalculatorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LICENCE_FEE_TABLE_TEST_LIVE=TRUE.
  afterEach(liveDelay('LICENCE_FEE_TABLE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LicenceFeeTableSDK.test()
    const ent = testsdk.Calculator()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = LicenceFeeTableSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Calculator().create({"jurisdiction":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LICENCE_FEE_TABLE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'calculator.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"jurisdiction":{"a":true,"h":"Jurisdiction","n":"jurisdiction","r":false,"sh":"Where are you applying?","t":"`$STRING`","key$":"jurisdiction","index$":0},"serviceClass":{"a":true,"h":"Service Class","n":"serviceClass","r":false,"sh":"Highest class of service you will provide","t":"`$STRING`","key$":"serviceClass","index$":1},"services":{"a":true,"h":"Services","n":"services","r":false,"sh":"How many of the ten crypto-asset services will the authorisation cover?","t":"`$NUMBER`","key$":"services","index$":2}},"name":"calculator","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["jurisdiction","serviceClass","services"],"co":{"id":"POST /mcp/tools/calculate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/calculate","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"calculate"}],"t":{"req":{"jurisdiction":"`reqdata.jurisdiction`","serviceClass":"`reqdata.service_class`","services":"`reqdata.service`"},"res":"`body`"},"index$":0},{"a":true,"bf":false,"co":{"id":"POST /mcp/tools/calculator_describe","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/mcp/tools/calculator_describe","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"mcp"},{"lit":"tools"},{"lit":"calculator_describe"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"calculator","name__orig":"calculator","Name":"Calculator","name_":"calculator","name-":"calculator","NAME":"CALCULATOR","index$":0}, {"active":true,"entity":"calculator","key$":"BasicCalculatorFlow","kind":"basic","name":"BasicCalculatorFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"calculator_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Calculator', {"POST /mcp/tools/calculate":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"jurisdiction":{"type":"string","enum":["mt","fr","ie","de","nl"],"description":"Where are you applying?","default":"mt","key$":"jurisdiction"},"serviceClass":{"type":"string","enum":["1","2","3"],"description":"Highest class of service you will provide","default":"2","key$":"serviceClass"},"services":{"type":"number","minimum":1,"maximum":10,"description":"How many of the ten crypto-asset services will the authorisation cover?","default":3,"key$":"services"}},"additionalProperties":false,"index$":1}}}},"parameters":[]},"POST /mcp/tools/calculator_describe":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{},"index$":1}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const calculator_ref01_ent = client.Calculator()
    let calculator_ref01_data = setup.data.new.calculator['calculator_ref01']

    calculator_ref01_data = (await calculator_ref01_ent.create(calculator_ref01_data)).data()
    assert(null != calculator_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/calculator/CalculatorTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LicenceFeeTableSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['calculator01','calculator02','calculator03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LICENCE_FEE_TABLE_TEST_CALCULATOR_ENTID': idmap,
    'LICENCE_FEE_TABLE_TEST_LIVE': 'FALSE',
    'LICENCE_FEE_TABLE_TEST_EXPLAIN': 'FALSE',
    'LICENCE_FEE_TABLE_APIKEY': '',
  })

  idmap = env['LICENCE_FEE_TABLE_TEST_CALCULATOR_ENTID']

  const live = 'TRUE' === env.LICENCE_FEE_TABLE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LICENCE_FEE_TABLE_TEST_CALCULATOR_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LicenceFeeTableSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.LICENCE_FEE_TABLE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LICENCE_FEE_TABLE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
