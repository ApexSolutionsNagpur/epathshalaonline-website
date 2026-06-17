'use client';

import React from 'react';
import { surveyTranslations } from '@/lib/surveyTranslations';
import type { Language, SurveyData } from '@/types/survey';

interface StepTechConnectivityProps {
  data: SurveyData;
  onChange: <K extends keyof SurveyData>(field: K, value: SurveyData[K]) => void;
  errors: Record<string, string>;
  language: Language;
}

const DEVICE_KEYS = ['smartphone', 'tablet', 'laptop', 'desktop', 'none'] as const;
const COUNT_KEYS = ['count1', 'count2', 'count3plus'] as const;
const SPEED_KEYS = ['fast', 'average', 'slow', 'dontKnow'] as const;
const USAGE_KEYS = ['lessThan1hr', 'hr1to3', 'hr3to5', 'moreThan5hr'] as const;

function CheckGroup({
  label,
  options,
  selected,
  onToggle,
  t,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (key: string) => void;
  t: Record<string, string>;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {options.map((key) => {
          const isSelected = selected.includes(key);
          return (
            <label
              key={key}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#0B3C5D] text-white border-[#0B3C5D]'
                  : 'bg-[#F8F9FA] text-[#1F2937] border-gray-100 hover:border-gray-200'
              } ${key === 'none' || key === 'noneConcern' ? 'col-span-full md:col-span-1' : ''}`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggle(key)}
                className="sr-only"
                aria-label={t[key]}
              />
              <div
                className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                  isSelected ? 'bg-white border-white' : 'bg-transparent border-gray-300'
                }`}
              >
                {isSelected && (
                  <svg
                    className="w-3 h-3 text-[#0B3C5D]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
              <span className="text-sm font-medium">{t[key]}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

function RadioGroup({
  label,
  options,
  value,
  onChange,
  name,
  t,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (key: string) => void;
  name: string;
  t: Record<string, string>;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</p>
      <div className="flex flex-wrap gap-3">
        {options.map((key) => (
          <label
            key={key}
            className={`flex-1 min-w-[80px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
              value === key
                ? 'bg-[#0B3C5D] text-white border-[#0B3C5D]'
                : 'bg-[#F8F9FA] text-[#1F2937] border-gray-100 hover:border-gray-200'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={key}
              checked={value === key}
              onChange={() => onChange(key)}
              className="sr-only"
              aria-label={t[key]}
            />
            <span className="text-sm font-medium">{t[key]}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

const StepTechConnectivity = ({ data, onChange, language }: StepTechConnectivityProps) => {
  const t = surveyTranslations[language] as Record<string, string>;

  const toggleDevice = (device: string) => {
    if (device === 'none') {
      onChange('devices', data.devices.includes('none') ? [] : ['none']);
      return;
    }
    const filtered = data.devices.filter((d) => d !== 'none');
    const idx = filtered.indexOf(device);
    if (idx >= 0) {
      filtered.splice(idx, 1);
    } else {
      filtered.push(device);
    }
    onChange('devices', filtered);
  };

  return (
    <div className="space-y-6">
      <CheckGroup
        label={t.devicesLabel}
        options={DEVICE_KEYS}
        selected={data.devices}
        onToggle={toggleDevice}
        t={t}
      />

      <RadioGroup
        label={t.devicesCountLabel}
        options={COUNT_KEYS}
        value={data.devicesCount}
        onChange={(v) => onChange('devicesCount', v)}
        name="devicesCount"
        t={t}
      />

      <RadioGroup
        label={t.internetAtHomeLabel}
        options={['yes', 'no']}
        value={data.internetAtHome}
        onChange={(v) => {
          onChange('internetAtHome', v);
          if (v !== 'yes') onChange('internetType', '');
        }}
        name="internetAtHome"
        t={t}
      />

      {data.internetAtHome === 'yes' && (
        <RadioGroup
          label={t.internetTypeLabel}
          options={['mobileData', 'broadband', 'both']}
          value={data.internetType}
          onChange={(v) => onChange('internetType', v)}
          name="internetType"
          t={t}
        />
      )}

      <RadioGroup
        label={t.internetSpeedLabel}
        options={SPEED_KEYS}
        value={data.internetSpeed}
        onChange={(v) => onChange('internetSpeed', v)}
        name="internetSpeed"
        t={t}
      />

      <RadioGroup
        label={t.dailyUsageLabel}
        options={USAGE_KEYS}
        value={data.dailyUsage}
        onChange={(v) => onChange('dailyUsage', v)}
        name="dailyUsage"
        t={t}
      />
    </div>
  );
};

export default StepTechConnectivity;
