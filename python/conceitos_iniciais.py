Abaixo está um MVP em **Python + Streamlit** com categorias, fotos, metas, frases, estilos de mural e exportação básica.

Instale:

````powershell
pip install streamlit pillow
````

Salve em `condicionais.python`:

````python
import io
from datetime import date
from PIL import Image, ImageDraw, ImageFont
import streamlit as st

st.set_page_config(
    page_title="Mural dos Sonhos",
    page_icon="✨",
    layout="wide"
)

CATEGORIAS = [
    "Lugares que desejo conhecer",
    "Trabalho e carreira",
    "Família",
    "Casa e patrimônio",
    "Finanças",
    "Relacionamentos",
    "Saúde e bem-estar",
    "Fé e espiritualidade",
    "Estudos",
    "Lazer e hobbies",
    "Outros sonhos",
]

FRASES = {
    "Motivação": [
        ("Acredite no processo.", "Mural dos Sonhos"),
        ("Pequenos passos também levam longe.", "Mural dos Sonhos"),
        ("Seu futuro começa com uma decisão hoje.", "Mural dos Sonhos"),
    ],
    "Família": [
        ("Família é onde o coração encontra paz.", "Autor desconhecido"),
        ("O amor transforma momentos em memórias.", "Autor desconhecido"),
    ],
    "Fé": [
        ("Tudo tem o seu tempo determinado.", "Eclesiastes 3:1"),
        ("O Senhor é a minha força e o meu escudo.", "Salmos 28:7"),
    ],
    "Gratidão": [
        ("A gratidão transforma o que temos em suficiente.", "Autor desconhecido"),
        ("Valorize o presente enquanto constrói o futuro.", "Mural dos Sonhos"),
    ],
    "Sonhos e propósito": [
        ("Sonhos dão direção aos nossos passos.", "Mural dos Sonhos"),
        ("Imagine, planeje e realize.", "Mural dos Sonhos"),
    ],
}


def inicializar_estado():
    if "sonhos" not in st.session_state:
        st.session_state.sonhos = []

    if "fotos" not in st.session_state:
        st.session_state.fotos = []

    if "arte" not in st.session_state:
        st.session_state.arte = None


def criar_mural(imagens, titulo, estilo, cor):
    largura = 1200
    altura = 850
    mural = Image.new("RGB", (largura, altura), cor)
    desenho = ImageDraw.Draw(mural)

    try:
        fonte_titulo = ImageFont.truetype("arial.ttf", 42)
        fonte_texto = ImageFont.truetype("arial.ttf", 26)
    except OSError:
        fonte_titulo = ImageFont.load_default()
        fonte_texto = ImageFont.load_default()

    desenho.text((40, 30), titulo, fill="white", font=fonte_titulo)

    if not imagens:
        desenho.text(
            (40, 120),
            "Adicione fotos para criar seu mural.",
            fill="white",
            font=fonte_texto,
        )
        return mural

    colunas = 3
    tamanho = 330
    inicio_y = 120

    for indice, arquivo in enumerate(imagens[:9]):
        imagem = Image.open(arquivo).convert("RGB")
        imagem.thumbnail((tamanho, tamanho))

        x = 40 + (indice % colunas) * 370
        y = inicio_y + (indice // colunas) * 220

        if estilo == "Minimalista":
            imagem = imagem.resize((300, 190))
        elif estilo == "Criativo":
            imagem = imagem.rotate((-8, 8, -4)[indice % 3], expand=True)
            imagem.thumbnail((300, 190))
        else:
            imagem = imagem.resize((300, 190))

        mural.paste(imagem, (x, y))

    return mural


inicializar_estado()

st.title("✨ Mural dos Sonhos")
st.caption("Transforme seus sonhos em imagens, metas e inspiração.")

abas = st.tabs([
    "🏠 Meu mural",
    "🎯 Objetivos",
    "📸 Frases & Inspiração",
    "🤖 Criar com IA",
])

with abas[0]:
    st.header("Adicione imagens ao seu mural")

    arquivos = st.file_uploader(
        "Escolha uma ou várias fotos",
        type=["png", "jpg", "jpeg"],
        accept_multiple_files=True,
    )

    if arquivos:
        st.session_state.fotos = arquivos

    if st.session_state.fotos:
        colunas = st.columns(4)

        for indice, arquivo in enumerate(st.session_state.fotos):
            with colunas[indice % 4]:
                st.image(arquivo, use_container_width=True)
                st.caption(arquivo.name)

    if st.button("Limpar fotos"):
        st.session_state.fotos = []
        st.rerun()

with abas[1]:
    st.header("🎯 Meus objetivos")

    with st.form("formulario_sonho"):
        categoria = st.selectbox("Categoria", CATEGORIAS)
        titulo = st.text_input("Qual é o seu sonho?")
        descricao = st.text_area("Descreva seu objetivo")
        prazo = st.date_input("Data desejada", value=date.today())
        valor = st.number_input("Meta financeira", min_value=0.0, step=100.0)
        progresso = st.slider("Progresso", 0, 100, 0)

        salvar = st.form_submit_button("Adicionar objetivo")

    if salvar and titulo:
        st.session_state.sonhos.append({
            "categoria": categoria,
            "titulo": titulo,
            "descricao": descricao,
            "prazo": prazo,
            "valor": valor,
            "progresso": progresso,
        })
        st.success("Objetivo adicionado!")

    for sonho in st.session_state.sonhos:
        with st.container(border=True):
            st.subheader(sonho["titulo"])
            st.write(f"**Categoria:** {sonho['categoria']}")
            st.write(sonho["descricao"])
            st.write(f"📅 Prazo: {sonho['prazo']}")
            st.write(f"💰 Meta: € {sonho['valor']:,.2f}")
            st.progress(sonho["progresso"] / 100)
            st.caption(f"{sonho['progresso']}% concluído")

with abas[2]:
    st.header("📸 Frases & Inspiração")

    tema = st.selectbox("Escolha um tema", list(FRASES.keys()))
    foto_frase = st.file_uploader(
        "Escolha uma foto para a frase",
        type=["png", "jpg", "jpeg"],
        key="foto_frase",
    )

    if foto_frase:
        st.image(foto_frase, width=400)

    frases = FRASES[tema]
    frase_escolhida = st.selectbox(
        "Escolha uma frase",
        [f"{texto} — {autor}" for texto, autor in frases],
    )

    texto, autor = frase_escolhida.split(" — ")

    st.markdown(f"### “{texto}”")
    st.caption(f"— {autor}")

    estilo_frase = st.selectbox(
        "Estilo da arte",
        ["Elegante", "Moderno", "Espiritual", "Minimalista", "Artístico"],
    )

    if st.button("Criar arte da frase"):
        st.success(f"Arte criada no estilo {estilo_frase}!")
        st.info("Em uma próxima versão, essa arte poderá ser exportada para Instagram e WhatsApp.")

with abas[3]:
    st.header("🤖 Criar meu mural com IA")

    titulo_mural = st.text_input(
        "Título do mural",
        value="Meus sonhos e objetivos",
    )

    estilo = st.radio(
        "Escolha um estilo",
        ["Inspirador", "Criativo", "Minimalista"],
        horizontal=True,
    )

    cores = {
        "Inspirador": "#8B4DFF",
        "Criativo": "#C87941",
        "Minimalista": "#263238",
    }

    instrucoes = st.text_area(
        "Como deseja personalizar?",
        placeholder="Ex.: destaque minha viagem e use cores tranquilas.",
    )

    if st.button("✨ Gerar mural"):
        st.session_state.arte = criar_mural(
            st.session_state.fotos,
            titulo_mural,
            estilo,
            cores[estilo],
        )
        st.success(f"Mural criado no estilo {estilo}.")

        if instrucoes:
            st.caption(f"Personalização solicitada: {instrucoes}")

    if st.session_state.arte:
        st.image(st.session_state.arte, caption="Prévia do seu mural")

        buffer = io.BytesIO()
        st.session_state.arte.save(buffer, format="PNG")

        st.download_button(
            "⬇️ Baixar mural",
            data=buffer.getvalue(),
            file_name="meu_mural.png",
            mime="image/png",
        )
````

Execute no terminal do VS Code:

````powershell
cd C:\dev\python
streamlit run condicionais.python
````

import io
from datetime import date
from PIL import Image, ImageDraw, ImageFont
import streamlit as st

st.set_page_config(
    page_title="Mural dos Sonhos",
    page_icon="✨",
    layout="wide"
)

CATEGORIAS = [
    "Lugares que desejo conhecer",
    "Trabalho e carreira",
    "Família",
    "Casa e patrimônio",
    "Finanças",
    "Relacionamentos",
    "Saúde e bem-estar",
    "Fé e espiritualidade",
    "Estudos",
    "Lazer e hobbies",
    "Outros sonhos",
]

FRASES = {
    "Motivação": [
        ("Acredite no processo.", "Mural dos Sonhos"),
        ("Pequenos passos também levam longe.", "Mural dos Sonhos"),
        ("Seu futuro começa com uma decisão hoje.", "Mural dos Sonhos"),
    ],
    "Família": [
        ("Família é onde o coração encontra paz.", "Autor desconhecido"),
        ("O amor transforma momentos em memórias.", "Autor desconhecido"),
    ],
    "Fé": [
        ("Tudo tem o seu tempo determinado.", "Eclesiastes 3:1"),
        ("O Senhor é a minha força e o meu escudo.", "Salmos 28:7"),
    ],
    "Gratidão": [
        ("A gratidão transforma o que temos em suficiente.", "Autor desconhecido"),
        ("Valorize o presente enquanto constrói o futuro.", "Mural dos Sonhos"),
    ],
    "Sonhos e propósito": [
        ("Sonhos dão direção aos nossos passos.", "Mural dos Sonhos"),
        ("Imagine, planeje e realize.", "Mural dos Sonhos"),
    ],
}


def inicializar_estado():
    if "sonhos" not in st.session_state:
        st.session_state.sonhos = []

    if "fotos" not in st.session_state:
        st.session_state.fotos = []

    if "arte" not in st.session_state:
        st.session_state.arte = None


def criar_mural(imagens, titulo, estilo, cor):
    largura = 1200
    altura = 850
    mural = Image.new("RGB", (largura, altura), cor)
    desenho = ImageDraw.Draw(mural)

    try:
        fonte_titulo = ImageFont.truetype("arial.ttf", 42)
        fonte_texto = ImageFont.truetype("arial.ttf", 26)
    except OSError:
        fonte_titulo = ImageFont.load_default()
        fonte_texto = ImageFont.load_default()

    desenho.text((40, 30), titulo, fill="white", font=fonte_titulo)

    if not imagens:
        desenho.text(
            (40, 120),
            "Adicione fotos para criar seu mural.",
            fill="white",
            font=fonte_texto,
        )
        return mural

    colunas = 3
    tamanho = 330
    inicio_y = 120

    for indice, arquivo in enumerate(imagens[:9]):
        imagem = Image.open(arquivo).convert("RGB")
        imagem.thumbnail((tamanho, tamanho))

        x = 40 + (indice % colunas) * 370
        y = inicio_y + (indice // colunas) * 220

        if estilo == "Minimalista":
            imagem = imagem.resize((300, 190))
        elif estilo == "Criativo":
            imagem = imagem.rotate((-8, 8, -4)[indice % 3], expand=True)
            imagem.thumbnail((300, 190))
        else:
            imagem = imagem.resize((300, 190))

        mural.paste(imagem, (x, y))

    return mural


inicializar_estado()

st.title("✨ Mural dos Sonhos")
st.caption("Transforme seus sonhos em imagens, metas e inspiração.")

abas = st.tabs([
    "🏠 Meu mural",
    "🎯 Objetivos",
    "📸 Frases & Inspiração",
    "🤖 Criar com IA",
])

with abas[0]:
    st.header("Adicione imagens ao seu mural")

    arquivos = st.file_uploader(
        "Escolha uma ou várias fotos",
        type=["png", "jpg", "jpeg"],
        accept_multiple_files=True,
    )

    if arquivos:
        st.session_state.fotos = arquivos

    if st.session_state.fotos:
        colunas = st.columns(4)

        for indice, arquivo in enumerate(st.session_state.fotos):
            with colunas[indice % 4]:
                st.image(arquivo, use_container_width=True)
                st.caption(arquivo.name)

    if st.button("Limpar fotos"):
        st.session_state.fotos = []
        st.rerun()

with abas[1]:
    st.header("🎯 Meus objetivos")

    with st.form("formulario_sonho"):
        categoria = st.selectbox("Categoria", CATEGORIAS)
        titulo = st.text_input("Qual é o seu sonho?")
        descricao = st.text_area("Descreva seu objetivo")
        prazo = st.date_input("Data desejada", value=date.today())
        valor = st.number_input("Meta financeira", min_value=0.0, step=100.0)
        progresso = st.slider("Progresso", 0, 100, 0)

        salvar = st.form_submit_button("Adicionar objetivo")

    if salvar and titulo:
        st.session_state.sonhos.append({
            "categoria": categoria,
            "titulo": titulo,
            "descricao": descricao,
            "prazo": prazo,
            "valor": valor,
            "progresso": progresso,
        })
        st.success("Objetivo adicionado!")

    for sonho in st.session_state.sonhos:
        with st.container(border=True):
            st.subheader(sonho["titulo"])
            st.write(f"**Categoria:** {sonho['categoria']}")
            st.write(sonho["descricao"])
            st.write(f"📅 Prazo: {sonho['prazo']}")
            st.write(f"💰 Meta: € {sonho['valor']:,.2f}")
            st.progress(sonho["progresso"] / 100)
            st.caption(f"{sonho['progresso']}% concluído")

with abas[2]:
    st.header("📸 Frases & Inspiração")

    tema = st.selectbox("Escolha um tema", list(FRASES.keys()))
    foto_frase = st.file_uploader(
        "Escolha uma foto para a frase",
        type=["png", "jpg", "jpeg"],
        key="foto_frase",
    )

    if foto_frase:
        st.image(foto_frase, width=400)

    frases = FRASES[tema]
    frase_escolhida = st.selectbox(
        "Escolha uma frase",
        [f"{texto} — {autor}" for texto, autor in frases],
    )

    texto, autor = frase_escolhida.split(" — ")

    st.markdown(f"### “{texto}”")
    st.caption(f"— {autor}")

    estilo_frase = st.selectbox(
        "Estilo da arte",
        ["Elegante", "Moderno", "Espiritual", "Minimalista", "Artístico"],
    )

    if st.button("Criar arte da frase"):
        st.success(f"Arte criada no estilo {estilo_frase}!")
        st.info("Em uma próxima versão, essa arte poderá ser exportada para Instagram e WhatsApp.")

with abas[3]:
    st.header("🤖 Criar meu mural com IA")

    titulo_mural = st.text_input(
        "Título do mural",
        value="Meus sonhos e objetivos",
    )

    estilo = st.radio(
        "Escolha um estilo",
        ["Inspirador", "Criativo", "Minimalista"],
        horizontal=True,
    )

    cores = {
        "Inspirador": "#8B4DFF",
        "Criativo": "#C87941",
        "Minimalista": "#263238",
    }

    instrucoes = st.text_area(
        "Como deseja personalizar?",
        placeholder="Ex.: destaque minha viagem e use cores tranquilas.",
    )

    if st.button("✨ Gerar mural"):
        st.session_state.arte = criar_mural(
            st.session_state.fotos,
            titulo_mural,
            estilo,
            cores[estilo],
        )
        st.success(f"Mural criado no estilo {estilo}.")

        if instrucoes:
            st.caption(f"Personalização solicitada: {instrucoes}")

    if st.session_state.arte:
        st.image(st.session_state.arte, caption="Prévia do seu mural")

        buffer = io.BytesIO()
        st.session_state.arte.save(buffer, format="PNG")

        st.download_button(
            "⬇️ Baixar mural",
            data=buffer.getvalue(),
            file_name="meu_mural.png",
            mime="image/png",
        )