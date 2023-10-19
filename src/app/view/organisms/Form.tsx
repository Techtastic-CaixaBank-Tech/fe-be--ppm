'use client';
import React, { useState } from 'react';
import useFormStore from '@/app/states/FormStore';

function Form() {
  const form = useFormStore((state) => state.form);
  return (
    <div>
      <p className="font-bold text-black text-xl">Titulo</p>
      <p className="text-neutral-400">#032022</p>
      <form className="mt-10">
        <div className="collapse collapse-arrow mb-4 border-sky-400 border-t-2 border-b-2 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-sky-300 text-xl font-medium">
            Información general
          </div>
          <div className="collapse-content grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <p className="text-black">Nombre del proyecto</p>
              <input
                type="text"
                value={form.projectName}
                className="input input-bordered w-full bg-neutral-200 text-black"
              />
            </div>
            <div className="col-span-2">
              <p className="text-black">Descripción</p>
              <textarea
                className="textarea textarea-bordered w-full bg-neutral-200 text-black"
                rows={4}
                value={form.description}
              ></textarea>
            </div>
            <div className="col-span-1">
              <p className="text-black">Prioridad del peticionario</p>
              <select
                className="select select-bordered w-full bg-neutral-200 text-black"
                value={form.solicitantPriority}
              >
                <option>Baja</option>
                <option>Alta</option>
              </select>
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow mb-4 border-sky-400 border-t-2 border-b-2 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-sky-300 text-xl font-medium">
            Interesados
          </div>
          <div className="collapse-content grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <p className="text-black">Grupo peticionario</p>
              <select
                className="select select-bordered w-full bg-neutral-200 text-black"
                value={form.peticionaryGroup}
              >
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
              </select>
            </div>
            <div className="col-span-1">
              <p className="text-black">Plataforma gestora</p>
              <select
                className="select select-bordered w-full bg-neutral-200 text-black"
                value={form.gestoryPlatform}
              >
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
              </select>
            </div>
            <div className="col-span-1">
              <p className="text-black">Grupo gestor</p>
              <select
                className="select select-bordered w-full bg-neutral-200 text-black"
                value={form.gestoryGroup}
              >
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
              </select>
            </div>
            <div className="col-span-1">
              <p className="text-black">Servicio IT</p>
              <select
                className="select select-bordered w-full bg-neutral-200 text-black"
                value={form.itService}
              >
                <option value={'A'}>A</option>
                <option value={'B'}>B</option>
              </select>
            </div>
          </div>
        </div>

        <div className="collapse collapse-arrow mb-4 border-sky-400 border-t-2 border-b-2 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-sky-300 text-xl font-medium">
            Validadores
          </div>
        </div>

        <div className="collapse collapse-arrow border-sky-400 border-t-2 border-b-2 rounded-none">
          <input type="checkbox" />
          <div className="collapse-title text-sky-300 text-xl font-medium">
            Detalle
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
