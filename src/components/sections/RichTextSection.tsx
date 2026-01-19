import { useMemo, useRef, useState } from "react";
import { ComponentShowcase } from "../ComponentShowcase";
import {
    Bold,
    Italic,
    Underline,
    List,
    ListOrdered,
    Link as LinkIcon,
    Image as ImageIcon,
    Code,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Quote,
} from "lucide-react";

type Cmd =
    | "bold"
    | "italic"
    | "underline"
    | "insertUnorderedList"
    | "insertOrderedList"
    | "justifyLeft"
    | "justifyCenter"
    | "justifyRight"
    | "formatBlock";

export function RichTextSection() {
    const editorRef = useRef<HTMLDivElement | null>(null);

    // Store HTML so your preview stays consistent and no “unused” state
    const [html, setHtml] = useState<string>(
        `<p>Try selecting text and using the buttons above!</p>
    <p>You can make text <b>bold</b>, <i>italic</i>, or <u>underlined</u>.</p>`
    );

    // Lightweight “active state” for toolbar buttons
    const [active, setActive] = useState({
        bold: false,
        italic: false,
        underline: false,
    });

    const canUseDom = typeof document !== "undefined";

    const exec = (command: Cmd, value?: string) => {
        if (!canUseDom) return;
        editorRef.current?.focus();

        // TS-friendly: pass 3 args (value optional)
        document.execCommand(command, false, value ?? "");
        syncActiveStates();
        syncHtml();
    };

    const syncHtml = () => {
        const next = editorRef.current?.innerHTML ?? "";
        setHtml(next);
    };

    const syncActiveStates = () => {
        if (!canUseDom) return;
        setActive({
            bold: document.queryCommandState("bold"),
            italic: document.queryCommandState("italic"),
            underline: document.queryCommandState("underline"),
        });
    };

    const insertLink = () => {
        if (!canUseDom) return;
        const url = window.prompt("Enter URL (https://...)");
        if (!url) return;
        exec("formatBlock"); // harmless focus
        document.execCommand("createLink", false, url);
        syncActiveStates();
        syncHtml();
    };

    const insertImage = () => {
        if (!canUseDom) return;
        const url = window.prompt("Enter image URL");
        if (!url) return;
        document.execCommand("insertImage", false, url);
        syncHtml();
    };

    const insertCodeBlock = () => {
        // quick and dirty code block: format block to PRE
        exec("formatBlock", "pre");
    };

    const toolbarBtn = useMemo(
        () => (isActive?: boolean) =>
            `p-2 rounded transition-colors ${isActive ? "bg-indigo-100 text-indigo-700" : "hover:bg-slate-200 text-slate-700"
            }`,
        []
    );

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-slate-900 mb-2">Rich Text Editors (WYSIWYG)</h1>
                <p className="text-slate-600">
                    Build or integrate robust editors that allow users to format text with bold, italics,
                    lists, alignment, links, and more.
                </p>
            </div>

            {/* Toolbar Only */}
            <ComponentShowcase
                title="Editor Toolbar"
                description="Rich text editor toolbar with formatting options"
                preview={
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                        <div className="border-b border-slate-200 p-2 flex flex-wrap gap-1">
                            <div className="flex gap-1 border-r border-slate-200 pr-2">
                                <button className="p-2 hover:bg-slate-100 rounded" title="Bold">
                                    <Bold className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Italic">
                                    <Italic className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Underline">
                                    <Underline className="w-4 h-4 text-slate-700" />
                                </button>
                            </div>

                            <div className="flex gap-1 border-r border-slate-200 pr-2">
                                <button className="p-2 hover:bg-slate-100 rounded" title="Bullet List">
                                    <List className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Numbered List">
                                    <ListOrdered className="w-4 h-4 text-slate-700" />
                                </button>
                            </div>

                            <div className="flex gap-1 border-r border-slate-200 pr-2">
                                <button className="p-2 hover:bg-slate-100 rounded" title="Align Left">
                                    <AlignLeft className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Align Center">
                                    <AlignCenter className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Align Right">
                                    <AlignRight className="w-4 h-4 text-slate-700" />
                                </button>
                            </div>

                            <div className="flex gap-1">
                                <button className="p-2 hover:bg-slate-100 rounded" title="Insert Link">
                                    <LinkIcon className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Insert Image">
                                    <ImageIcon className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Code Block">
                                    <Code className="w-4 h-4 text-slate-700" />
                                </button>
                                <button className="p-2 hover:bg-slate-100 rounded" title="Quote">
                                    <Quote className="w-4 h-4 text-slate-700" />
                                </button>
                            </div>
                        </div>
                        <div className="p-6 min-h-[200px] text-slate-900">
                            Click on toolbar buttons to format your text...
                        </div>
                    </div>
                }
                code={`import { Bold, Italic, Underline, List, Link } from "lucide-react";

export function EditorToolbar() {
  return (
    <div className="border-b p-2 flex gap-1">
      <button className="p-2 hover:bg-slate-100 rounded"><Bold className="w-4 h-4" /></button>
      <button className="p-2 hover:bg-slate-100 rounded"><Italic className="w-4 h-4" /></button>
      <button className="p-2 hover:bg-slate-100 rounded"><Underline className="w-4 h-4" /></button>
      <button className="p-2 hover:bg-slate-100 rounded"><List className="w-4 h-4" /></button>
      <button className="p-2 hover:bg-slate-100 rounded"><Link className="w-4 h-4" /></button>
    </div>
  );
}`}
            />

            {/* Basic WYSIWYG */}
            <ComponentShowcase
                title="Basic WYSIWYG Editor"
                description="Simple rich text editor with contentEditable + document.execCommand"
                preview={
                    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                        <div className="border-b border-slate-200 p-2 flex flex-wrap gap-1 bg-slate-50">
                            <button onClick={() => exec("bold")} className={toolbarBtn(active.bold)} title="Bold">
                                <Bold className="w-4 h-4" />
                            </button>
                            <button onClick={() => exec("italic")} className={toolbarBtn(active.italic)} title="Italic">
                                <Italic className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => exec("underline")}
                                className={toolbarBtn(active.underline)}
                                title="Underline"
                            >
                                <Underline className="w-4 h-4" />
                            </button>

                            <div className="w-px bg-slate-300 mx-1" />

                            <button
                                onClick={() => exec("insertUnorderedList")}
                                className={toolbarBtn(false)}
                                title="Bullet List"
                            >
                                <List className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => exec("insertOrderedList")}
                                className={toolbarBtn(false)}
                                title="Numbered List"
                            >
                                <ListOrdered className="w-4 h-4" />
                            </button>

                            <div className="w-px bg-slate-300 mx-1" />

                            <button onClick={() => exec("justifyLeft")} className={toolbarBtn(false)} title="Align Left">
                                <AlignLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => exec("justifyCenter")}
                                className={toolbarBtn(false)}
                                title="Align Center"
                            >
                                <AlignCenter className="w-4 h-4" />
                            </button>
                            <button onClick={() => exec("justifyRight")} className={toolbarBtn(false)} title="Align Right">
                                <AlignRight className="w-4 h-4" />
                            </button>

                            <div className="w-px bg-slate-300 mx-1" />

                            <button onClick={insertLink} className={toolbarBtn(false)} title="Insert Link">
                                <LinkIcon className="w-4 h-4" />
                            </button>
                            <button onClick={insertImage} className={toolbarBtn(false)} title="Insert Image">
                                <ImageIcon className="w-4 h-4" />
                            </button>
                            <button onClick={insertCodeBlock} className={toolbarBtn(false)} title="Code Block">
                                <Code className="w-4 h-4" />
                            </button>
                            <button onClick={() => exec("formatBlock", "blockquote")} className={toolbarBtn(false)} title="Quote">
                                <Quote className="w-4 h-4" />
                            </button>
                        </div>

                        <div
                            ref={editorRef}
                            contentEditable
                            suppressContentEditableWarning
                            onInput={() => {
                                syncActiveStates();
                                syncHtml();
                            }}
                            onKeyUp={syncActiveStates}
                            onMouseUp={syncActiveStates}
                            className="p-6 min-h-[200px] focus:outline-none text-slate-900 prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </div>
                }
                code={`"use client";
import { useRef, useState } from "react";
import { Bold } from "lucide-react";

export function BasicWYSIWYG() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [html, setHtml] = useState("<p>Hello</p>");

  const exec = (cmd: string, value?: string) => {
    ref.current?.focus();
    document.execCommand(cmd, false, value ?? "");
    setHtml(ref.current?.innerHTML ?? "");
  };

  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="border-b p-2">
        <button onClick={() => exec("bold")} className="p-2 hover:bg-slate-100 rounded">
          <Bold className="w-4 h-4" />
        </button>
      </div>
      <div
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        onInput={() => setHtml(ref.current?.innerHTML ?? "")}
        className="p-6 min-h-[160px]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}`}
            />

            {/* (Your Markdown / Comment / Inline sections can stay as-is) */}
        </div>
    );
}
